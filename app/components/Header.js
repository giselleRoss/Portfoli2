import Link from "next/link";
import React from "react";
import {useState} from 'react'

const DesktopMenu = () => (
  <div className="hidden lg:flex space-x-4">
      <Link href="/" className="hover:text-white-300">Home</Link>
      <Link href="/portfolio" className="hover:text-white-300">Portfolio</Link>
      <Link href="/aboutMe" className="hover:text-white-300">About Me</Link>
      <Link href="/contactMe" className="hover:text-white-300">Contact Me</Link>
  </div>
)


const MobileMenu = ({visibleDrawer, toggleDrawer}) => (
  <div className={`lg:hidden absolute top-16 right-4 bg-white-800 p-2 space-y-2 ${visibleDrawer ? 'visible' : 'invisible'}`}>
      <Link href="/" className="text-white block hover:text-white-300">Home</Link>
      <Link href="/portfolio" className="text-white block hover:text-white-300">Portfolio</Link>
      <Link href="/aboutMe" className="text-white block hover:text-white-300">About Me</Link>
      <Link href="/contactMe" className="text-white block hover:text-white-300">Contact Me</Link>
      <button onClick={toggleDrawer} className="text-white block hover:text-white-300">
      Close
    </button>
  </div>
  )


const OpenMenuDrawerButton = ({onClick}) => (
  <button onClick={onClick} className="text-white focus:outline-none">
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
)

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const toggleDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  }
  const handleResize = () => {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);
  return (
    <div className="bg-red-300 py-4 px-6 flex flex-wrap justify-between items-center">
      <div className="flex flex-col">
        <Link href="/">
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
        {width > 780 ? <DesktopMenu /> : <MobileMenu visibleDrawer={visibleDrawer} toggleDrawer={toggleDrawer} />}
      </div>
    </div>
)}
export default Header;
