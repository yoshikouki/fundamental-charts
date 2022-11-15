import { AssetCreateInput } from "@awas/types";
import { Stock } from "@awas/types/src/stock";
import { PrismaClient, PrismaPromise } from "@prisma/client";
import prisma from "../prisma/client";
import { filterNonNullable } from "../utils";

interface AssetUpsertAllInput extends Omit<AssetCreateInput, "symbol"> {
  stock: Stock;
}

export class HoldingAssetModel {
  readonly prisma: PrismaClient;

  constructor(props?: Partial<HoldingAssetModel>) {
    this.prisma = props?.prisma || prisma;
  }

  async upsetOrDeleteAll({ userId, assets }: { userId: number; assets: AssetUpsertAllInput[] }) {
    let transactionQueries: PrismaPromise<unknown>[] = [];
    const storedAssets = await this.prisma.holdingAsset.findMany({ where: { userId } });

    if (assets.length > 0) {
      const valuesQueryString = assets
        .map(
          (asset) =>
            `(${[
              userId,
              asset.stock.id,
              BigInt(asset.balance),
              parseFloat(String(asset.averageTradedPrice)),
            ].join(", ")})`
        )
        .join(",");
      const upsertAllAssetsQuery = this.prisma.$executeRawUnsafe(`
        INSERT INTO holding_assets (user_id, stock_id, balance, average_traded_price)
        VALUES ${valuesQueryString}
        ON CONFLICT(user_id, stock_id) DO UPDATE SET
          balance = EXCLUDED.balance,
          average_traded_price = EXCLUDED.average_traded_price
        ;
      `);
      transactionQueries.push(upsertAllAssetsQuery);
    }

    const creatingOrUpdatingStockIds = assets.map((asset) => asset.stock.id)
    const deletingAssetIds = filterNonNullable(storedAssets.map((storedAsset) => {
      if (creatingOrUpdatingStockIds.includes(storedAsset.stockId)) return;
      return storedAsset.id
    }));
    if (deletingAssetIds.length > 0) {
      const deletingAssetsQuery = this.prisma.holdingAsset.deleteMany({
        where: { id: { in: deletingAssetIds } },
      });
      transactionQueries.push(deletingAssetsQuery);
    }

    const upsetOrDeletedAssets = await this.prisma.$transaction(transactionQueries);
    return upsetOrDeletedAssets;
  }
}
