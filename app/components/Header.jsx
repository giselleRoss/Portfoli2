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
    <li><Link href="/portfolio" className="hover:text-white-300">
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
    className={`lg:hidden fixed top-0 right-0 bg-white bg-opacity-80 ${
      visibleDrawer ? "visible" : "invisible"
    }`}
  >
    <ul className="flex flex-col p-4">
      <li>
        <Link
          href="/"
          className="block py-2 pl-3 pr-4 text-black sm:text-xl hover:text-[#b13147] rounded"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/portfolio"
          className="block py-2 pl-3 pr-4 text-black sm:text-xl hover:text-[#b13147] rounded"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          href="/aboutMe"
          className="block py-2 pl-3 pr-4 text-black sm:text-xl hover:text-[#b13147] rounded"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          href="/contactMe"
          className="block py-2 pl-3 pr-4 text-black sm:text-xl hover:text-[#b13147] rounded"
        >
          Contact Me
        </Link>
      </li>
    </ul>
    <button
      onClick={toggleDrawer}
      className="text-black block hover:text-black p-4 text-xl font-semibold top-0 right-0"
    >
      Close
    </button>
  </div>
);

const OpenMenuDrawerButton = ({ onClick }) => (
  <button onClick={onClick} className="text-black focus:outline-none absolute top-0 right-0 p-4">
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
      <nav className={`fixed top-0 left-0 right-0 z-10 bg-red-300 bg-opacity-90 ${width <= 780 ? 'px-2' : ''} ${width <= 780 ? 'h-16' : ''}`}>
        <div className={`flex justify-between items-center mx-auto p-4 ${width <= 780 ? 'flex-col' : 'flex-row'}`}>
          <Link href={"/"}>
            <span className="text-black text-2xl font-semibold mb-2">
              Giselle Ross
            </span>
            <span className="text-black text-sm font-semibold py-4 px-6">
              Software engineer
            </span>
          </Link>
          <div className={`${width > 780 ? 'hidden' : 'lg:hidden'}`}>
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