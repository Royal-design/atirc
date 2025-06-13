import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { Search } from "./Search";
import { CgMenu, CgClose } from "react-icons/cg";
import { Button } from "./ui/button";

const links = [
  {
    title: "Who we are",
    path: "/who-we-are"
  },
  {
    title: "What we do",
    path: "/what-we-do"
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

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full bg-white py-4 px-4 md:py-6 md:px-24 flex items-center justify-between",
          isScrolled ? "shadow-sm bg-white/90 backdrop-blur-xl" : ""
        )}
      >
        <div className="flex items-center md:gap-12">
          {/* logo */}
          <NavLink to="/">
            <img src={logo} alt="Artic-Logo" className="h-8 md:h-10" />
          </NavLink>

          {/* desktop nav */}
          <nav className="hidden md:flex gap-6">
            {links.map((link) => (
              <NavLink
                to={link.path}
                key={link.path}
                className={({ isActive }) =>
                  cn(
                    "relative pb-1 text-accent-black hover:text-primary transition-colors",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                    isActive
                      ? "text-primary after:w-full"
                      : "hover:after:w-full"
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* search */}
          <Search
            isSearchClick={isSearchClick}
            setIsSearchClick={setIsSearchClick}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          {/* mobile menu button */}
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
            {isMobileMenuOpen ? <CgClose size={24} /> : <CgMenu size={24} />}
          </Button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed top-16 w-full bg-white shadow-lg z-40 overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {links.map((link) => (
            <NavLink
              to={link.path}
              key={link.path}
              className={({ isActive }) =>
                cn(
                  "py-2 px-3 rounded-md hover:bg-gray-50 transition-colors",
                  isActive ? "text-primary font-medium" : "text-accent-black"
                )
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-16 md:h-22"></div>
    </>
  );
};
