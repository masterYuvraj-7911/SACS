import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/Logo.png";
import OverlayMenu from "./OverlayMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const homeSection = document.getElementById("home");

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const homeBottom = homeSection?.getBoundingClientRect().bottom;

      const isInHome = homeBottom > 80;

      if (isInHome) {
        setShowNavbar(true);
        clearTimeout(hideTimeout.current);
        lastScrollY.current = currentScroll;
        return;
      }

      if (homeBottom <= 80 && lastScrollY.current < 50) {
        setShowNavbar(false);
      }

      if (currentScroll < lastScrollY.current) {
        setShowNavbar(true);

        clearTimeout(hideTimeout.current);

        hideTimeout.current = setTimeout(() => {
          setShowNavbar(false);
        }, 1800);
      } else {
        setShowNavbar(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout.current);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50 flex items-center justify-between px-6 sm:px-10 text-fuchsia-600 bg-primary/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(128,17,255,0.12)] transition-all duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="h-4/6 rounded-full overflow-hidden">
          <img src={Logo} alt="Logo" className="h-full" />
        </div>

        <button onClick={() => setIsOpen(true)} className="sm:hidden">
          <FiMenu className="text-4xl text-black-hover font-bold" />
        </button>

        <div className="hidden sm:flex items-center space-x-8">
          {["home", "about", "toppers", "contact"].map((e) => (
            <a
              key={e}
              href={`#${e}`}
              className="text-white font-bold capitalize transition-colors hover:text-yellow-400">
              {e}
            </a>
          ))}
        </div>
      </nav>

      <OverlayMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
