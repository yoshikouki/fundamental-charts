import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome, FaNewspaper, FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { useBreakpoint } from "../hooks/breakpoint";

const navigationItems = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome className="h-6 w-6" />,
  },
  {
    title: "News",
    path: "/news",
    icon: <FaNewspaper className="h-6 w-6" />,
  },
  {
    title: "Search",
    path: "/search",
    icon: <FaSearch className="h-6 w-6" />,
  },
];

const MainNavigation = () => {
  const router = useRouter();
  const isCurrentPage = (path: string) => router.pathname === path;
  const { isCurrentBreakpoint } = useBreakpoint();

  return (
    <>
      <div className="btm-nav sm:hidden">
        {navigationItems.map((item, i) => (
          <Link href={item.path} key={i}>
            <a className={`${isCurrentPage(item.path) && "active"}`}>
              {item.icon}
            </a>
          </Link>
        ))}
      </div>

      <div className="hidden sm:block fixed h-full z-20 lg:w-80 overflow-y-auto">
        <ul className="menu p-0 px-4 mt-12 lg:w-80 text-base-content">
          {navigationItems.map((item, i) => (
            <li key={i}>
              <Link href={item.path}>
                <a className={`${isCurrentPage(item.path) && "active"}`}>
                  {item.icon}
                  <span className="hidden lg:inline">
                    {item.title}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainNavigation;
