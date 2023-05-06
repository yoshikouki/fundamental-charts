import AssetsPieChart from "./nivo/AssetsPieChart";
import AssetsSunburst from "./nivo/AssetsSunburst";

const assetsWithValuations = [
  {
    id: 6,
    symbol: "VTI",
    name: null,
    balance: 34,
    averageTradedPrice: 210.24265,
    latestPrice: 202.49,
    close: 202.49,
    profitLossPerShare: -7.75265,
    profitLoss: -263.5901,
    profitLossPercentage: -3.687477303011544,
    acquisitionValue: 7148.2501,
    marketValue: 6884.66,
  },
  {
    id: 9,
    symbol: "SPYD",
    name: null,
    balance: 212,
    averageTradedPrice: 27.71,
    latestPrice: 36.77,
    close: 36.77,
    profitLossPerShare: 9.06,
    profitLoss: 1920.72,
    profitLossPercentage: 32.6957776975821,
    acquisitionValue: 5874.52,
    marketValue: 7795.24,
  },
  {
    id: 22,
    symbol: "GLD",
    name: null,
    balance: 53,
    averageTradedPrice: 177.2209,
    latestPrice: 189.11,
    close: 189.11,
    profitLossPerShare: 11.8891,
    profitLoss: 630.1223,
    profitLossPercentage: 6.7086331239712695,
    acquisitionValue: 9392.7077,
    marketValue: 10022.83,
  },
  {
    id: 28,
    symbol: "IAU",
    name: null,
    balance: 25,
    averageTradedPrice: 0,
    latestPrice: 38.57,
    close: 38.57,
    profitLossPerShare: 0,
    profitLoss: 0,
    profitLossPercentage: 0,
    acquisitionValue: 0,
    marketValue: 964.25,
  },
  {
    id: 32,
    symbol: "GDX",
    name: null,
    balance: 200,
    averageTradedPrice: 33.7372,
    latestPrice: 34.86,
    close: 34.86,
    profitLossPerShare: 1.1228,
    profitLoss: 224.56,
    profitLossPercentage: 3.3280770188397377,
    acquisitionValue: 6747.44,
    marketValue: 6972,
  },
  {
    id: 33,
    symbol: "VYM",
    name: null,
    balance: 30,
    averageTradedPrice: 77.721,
    latestPrice: 103.91,
    close: 103.91,
    profitLossPerShare: 26.189,
    profitLoss: 785.67,
    profitLossPercentage: 33.696169632403084,
    acquisitionValue: 2331.63,
    marketValue: 3117.3,
  },
  {
    id: 34,
    symbol: "GLIN",
    name: null,
    balance: 92,
    averageTradedPrice: 30.9737,
    latestPrice: 33.3045,
    close: 33.3045,
    profitLossPerShare: 2.3308,
    profitLoss: 214.4336,
    profitLossPercentage: 7.525093869960644,
    acquisitionValue: 2849.5804,
    marketValue: 3064.014,
  },
  {
    id: 39,
    symbol: "HDV",
    name: null,
    balance: 30,
    averageTradedPrice: 82.5593,
    latestPrice: 99.52,
    close: 99.52,
    profitLossPerShare: 16.9607,
    profitLoss: 508.821,
    profitLossPercentage: 20.54365771027613,
    acquisitionValue: 2476.779,
    marketValue: 2985.6,
  },
  {
    id: 40,
    symbol: "VDC",
    name: null,
    balance: 20,
    averageTradedPrice: 179.976,
    latestPrice: 198.74,
    close: 198.74,
    profitLossPerShare: 18.764,
    profitLoss: 375.28,
    profitLossPercentage: 10.42583455571854,
    acquisitionValue: 3599.52,
    marketValue: 3974.8,
  },
  {
    id: 41,
    symbol: "VHT",
    name: null,
    balance: 4,
    averageTradedPrice: 225.77,
    latestPrice: 245.87,
    close: 245.87,
    profitLossPerShare: 20.1,
    profitLoss: 80.4,
    profitLossPercentage: 8.902865748327944,
    acquisitionValue: 903.08,
    marketValue: 983.48,
  },
  {
    id: 42,
    symbol: "C",
    name: null,
    balance: 75,
    averageTradedPrice: 68.2792,
    latestPrice: 45.67,
    close: 45.67,
    profitLossPerShare: -22.6092,
    profitLoss: -1695.69,
    profitLossPercentage: -33.11286599725832,
    acquisitionValue: 5120.94,
    marketValue: 3425.25,
  },
  {
    id: 43,
    symbol: "FCX",
    name: null,
    balance: 31,
    averageTradedPrice: 21.0735,
    latestPrice: 36.33,
    close: 36.33,
    profitLossPerShare: 15.2565,
    profitLoss: 472.9515,
    profitLossPercentage: 72.39661185849526,
    acquisitionValue: 653.2785,
    marketValue: 1126.23,
  },
  {
    id: 51,
    symbol: "JNJ",
    name: null,
    balance: 5,
    averageTradedPrice: 149.128,
    latestPrice: 162.87,
    close: 162.87,
    profitLossPerShare: 13.742,
    profitLoss: 68.71,
    profitLossPercentage: 9.214902633978864,
    acquisitionValue: 745.64,
    marketValue: 814.35,
  },
  {
    id: 52,
    symbol: "KO",
    name: null,
    balance: 40,
    averageTradedPrice: 44.2177,
    latestPrice: 63.65,
    close: 63.65,
    profitLossPerShare: 19.4323,
    profitLoss: 777.292,
    profitLossPercentage: 43.946881000142476,
    acquisitionValue: 1768.708,
    marketValue: 2546,
  },
  {
    id: 53,
    symbol: "WBD",
    name: null,
    balance: 76,
    averageTradedPrice: 0,
    latestPrice: 12.85,
    close: 12.85,
    profitLossPerShare: 0,
    profitLoss: 0,
    profitLossPercentage: 0,
    acquisitionValue: 0,
    marketValue: 976.6,
  },
  {
    id: 54,
    symbol: "T",
    name: null,
    balance: 318,
    averageTradedPrice: 0,
    latestPrice: 17.09,
    close: 17.09,
    profitLossPerShare: 0,
    profitLoss: 0,
    profitLossPercentage: 0,
    acquisitionValue: 0,
    marketValue: 5434.62,
  },
  {
    id: 55,
    symbol: "EWZ",
    name: null,
    balance: 116,
    averageTradedPrice: 29.6257,
    latestPrice: 27.59,
    close: 27.59,
    profitLossPerShare: -2.0357,
    profitLoss: -236.1412,
    profitLossPercentage: -6.871398819268405,
    acquisitionValue: 3436.5812,
    marketValue: 3200.44,
  },
  {
    id: 56,
    symbol: "GSG",
    name: null,
    balance: 285,
    averageTradedPrice: 18.5536,
    latestPrice: 18.69,
    close: 18.69,
    profitLossPerShare: 0.1364,
    profitLoss: 38.874,
    profitLossPercentage: 0.7351672990686443,
    acquisitionValue: 5287.776,
    marketValue: 5326.65,
  },
  {
    id: 57,
    symbol: "WMT",
    name: null,
    balance: 31,
    averageTradedPrice: 121.7996,
    latestPrice: 150.62,
    close: 150.62,
    profitLossPerShare: 28.8204,
    profitLoss: 893.4324,
    profitLossPercentage: 23.6621466737165,
    acquisitionValue: 3775.7876,
    marketValue: 4669.22,
  },
  {
    id: 58,
    symbol: "XOM",
    name: null,
    balance: 113,
    averageTradedPrice: 54.3089,
    latestPrice: 107.93,
    close: 107.93,
    profitLossPerShare: 53.6211,
    profitLoss: 6059.1843,
    profitLossPercentage: 98.73354091134235,
    acquisitionValue: 6136.9057,
    marketValue: 12196.09,
  },
];

const Home = () => {

  return (
    <>
      <h2>Home</h2>
      <div style={{ height: 400 }}>
        <AssetsPieChart assetsWithValuations={assetsWithValuations} />
      </div>
    </>
  );
};

export default Home;
