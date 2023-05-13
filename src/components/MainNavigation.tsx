import { BiCoinStack } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome className="h-6 w-6" />,
  },
  {
    title: "Assets",
    path: "/assets",
    icon: <BiCoinStack className="h-6 w-6" />,
  },
];

const MainNavigation = () => {
  const pathname = usePathname();
  const isCurrentPage = (path: string) => pathname === path;

  return (
    <>
      <div className="btm-nav z-20 sm:hidden">
        {navigationItems.map((item, i) => (
          <Link
            href={item.path}
            key={i}
            className={`${isCurrentPage(item.path) && "active"}`}
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <div className="fixed z-20 hidden h-full overflow-y-auto sm:block lg:w-80">
        <ul className="menu mt-12 p-0 px-4 text-base-content lg:w-80">
          {navigationItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className={`${isCurrentPage(item.path) && "active"}`}
              >
                {item.icon}
                <span className="hidden lg:inline">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainNavigation;
