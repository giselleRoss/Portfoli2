"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MenuIcon from "@/public/menu.svg";

const DesktopMenu = () => (
  <div id="header" className="menu hidden md:block md:w-auto">
    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
      <li>
        <Link href="/" className="hover:text-pink-600">
          Home
        </Link>
      </li>
      <li>
        <Link href="/portfolio" className="hover:text-pink-600">
          Portfolio
        </Link>
      </li>
      <li>
        <Link href="/aboutMe" className="hover:text-pink-600">
          About Me
        </Link>
      </li>
      <li>
        <Link href="/contactMe" className="hover:text-pink-600">
          Contact Me
        </Link>
      </li>
    </ul>
  </div>
);

const MobileMenu = ({ visibleDrawer, toggleDrawer }) => (
  <div
    className={`lg:hidden fixed top-0 right-0 bg-white bg-opacity-80 ${
      visibleDrawer ? "visible" : "hidden"
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
  <div>
    <button
  type="button"
    onClick={onClick}
    className="text-black absolute top-0 right-0 p-4"
  >
    <Image src={MenuIcon} tabIndex={0} className="w-8 h-8 inline-block" alt="menu icon" priority={false}/>
  </button>
  </div>
  
);

const Header = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const toggleDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-red-300 bg-opacity-80">
      <div className="flex justify-between items-center mx-auto p-4 md:flex-row">
        <Link href={"/"}>
          <div className="text-black text-2xl font-semibold mb-2 hover:text-pink-600">
            Giselle Ross
          </div>
        </Link>
        <div className="md:hidden">
          <OpenMenuDrawerButton onClick={toggleDrawer} />
        </div>
        {/* Desktop menu */}
        <div className="hidden md:block">
          <DesktopMenu />
        </div>
      </div>
      <div>
        <MobileMenu visibleDrawer={visibleDrawer} toggleDrawer={toggleDrawer} />
      </div>
      {/* Mobile menu */}
    </nav>
  );
};
export default Header;
