"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const DesktopMenu = () => (
  <div className="menu hidden md:block md:w-auto" id="header">
    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
    <li><Link href="/" className="hover:text-white-300">
      Home
    </Link>
    </li>
    <li><Link href="/portfolio" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
      Portfolio
    </Link>
    </li>
    <li><Link href="/aboutMe" className="hover:text-white-300">
      About Me
    </Link>
    </li>
    <li><Link href="/contactMe" className="hover:text-white-300">
      Contact Me
    </Link>
    </li>
  </ul>
  </div>
  
);

const MobileMenu = ({ visibleDrawer, toggleDrawer }) => (
  <div
    className={`lg:hidden top-16 right-4 bg-white-800 p-2 space-y-2 ${
      visibleDrawer ? "visible" : "invisible"
    }`}
  >
    <ul>
    <li><Link href="/#home" className="hover:text-white-300">
      Home
    </Link>
    </li>
    <li><Link href="/#portfolio" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
      Portfolio
    </Link>
    </li>
    <li><Link href="/#aboutMe" className="hover:text-white-300">
      About Me
    </Link>
    </li>
    <li><Link href="/#contactMe" className="hover:text-white-300">
      Contact Me
    </Link>
    </li>
    </ul>
    <button
      onClick={toggleDrawer}
      className="text-white block hover:text-white-300"
    >
      Close
    </button>
  </div>
);

const OpenMenuDrawerButton = ({ onClick }) => (
  <button onClick={onClick} className="text-white focus:outline-none">
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  </button>
);

const Header = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const toggleDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4">
          <Link href={"/#home"}>
            <span className="text-black text-2xl font-semibold mb-2">
              Giselle Ross
            </span>
            <span className="text-black text-sm font-semibold py-4 px-6">
              Software engineer
            </span>
          </Link>
          <div className="lg:hidden">
            <OpenMenuDrawerButton onClick={toggleDrawer} />
          </div>
          {width > 780 ? (
            <DesktopMenu />
          ) : (
            <MobileMenu
              visibleDrawer={visibleDrawer}
              toggleDrawer={toggleDrawer}
            />
          )}
        </div>
      </nav>
    </>
  );
};
export default Header;
