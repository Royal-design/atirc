import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { Search } from "./Search";
import { CgMenu, CgClose } from "react-icons/cg";
import { Button } from "./ui/button";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const links = [
  {
    title: "Who we are",
    path: "/who-we-are"
  },
  {
    title: "What we do",
    path: "/what-we-do",
    isMenu: true,
    subMenu: [
      { title: "Overview", path: "/what-we-do" },
      { title: "Learning", path: "/what-we-do/learning" },
      { title: "Incubator", path: "/what-we-do/incubation" },
      { title: "Research", path: "/what-we-do/research" },
      { title: "Consulting", path: "/what-we-do/consulting" }
    ]
  },
  {
    title: "News",
    path: "/news"
  },
  {
    title: "Career",
    path: "/career"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchClick, setIsSearchClick] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchClick(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsSearchClick(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full bg-white py-4 px-4 md:py-6 md:px-24 flex items-center",
          isSearchClick ? "justify-end" : " justify-between",
          isScrolled ? "shadow-sm bg-white/90 backdrop-blur-xl" : ""
        )}
      >
        <div
          className={cn(
            " items-center md:gap-12",
            isSearchClick ? "hidden" : "flex"
          )}
        >
          {/* logo */}
          <NavLink to="/">
            <img src={logo} alt="Artic-Logo" className="h-8 md:h-10" />
          </NavLink>

          {/* desktop nav */}
          <nav className="hidden md:flex gap-6">
            {links.map((link) => (
              <div key={link.path} className="relative">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "relative flex items-center pb-1 text-accent-black hover:text-primary transition-colors",
                      "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                      isActive
                        ? "text-primary after:w-full"
                        : "hover:after:w-full"
                    )
                  }
                >
                  <span>{link.title}</span>
                  {link.isMenu && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowMenu(!showMenu);
                      }}
                    >
                      {showMenu ? (
                        <TiArrowSortedUp className="ml-2" />
                      ) : (
                        <TiArrowSortedDown className="ml-2" />
                      )}
                    </button>
                  )}
                </NavLink>

                {/* Dropdown menu for "What we do" */}
                {link.isMenu && showMenu && (
                  <div className="absolute top-12 left-0 mt-2 w-48 bg-white shadow-lg py-1 z-50">
                    {link.subMenu?.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) =>
                          cn(
                            "block px-4 py-2 text-sm text-accent-black hover:bg-gray-100",
                            isActive ? "text-primary font-medium" : ""
                          )
                        }
                        onClick={() => setShowMenu(false)}
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div
          className={cn(
            "flex justify-end items-center gap-2",
            isSearchClick && "w-full"
          )}
        >
          {/* search */}
          <Search
            isSearchClick={isSearchClick}
            setIsSearchClick={setIsSearchClick}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          {/* mobile menu button */}
          {!isSearchClick && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsSearchClick(false);
              }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <CgClose className="size-6" />
              ) : (
                <CgMenu className="size-6" />
              )}
            </Button>
          )}
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed top-16 w-full bg-white shadow-lg z-40 overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-100" : "max-h-0"
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {links.map((link) => (
            <div key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "py-2 px-3 rounded-md hover:bg-gray-50 transition-colors flex justify-between items-center",
                    isActive ? "text-primary font-medium" : "text-accent-black"
                  )
                }
                onClick={() => {
                  if (!link.isMenu) {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {link.title}
                {link.isMenu && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowMenu(!showMenu);
                    }}
                  >
                    {showMenu ? (
                      <TiArrowSortedUp className="ml-2" />
                    ) : (
                      <TiArrowSortedDown className="ml-2" />
                    )}
                  </button>
                )}
              </NavLink>

              {/* Mobile submenu */}
              {link.isMenu && showMenu && (
                <div className="pl-4 mt-1 space-y-2">
                  {link.subMenu?.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      className={({ isActive }) =>
                        cn(
                          "block py-2 px-3 rounded-md hover:bg-gray-50",
                          isActive
                            ? "text-primary font-medium"
                            : "text-accent-black"
                        )
                      }
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowMenu(false);
                      }}
                    >
                      {subItem.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-16 md:h-22"></div>
    </>
  );
};
