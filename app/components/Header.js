import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-red-300 py-4 px-6 flex flex-wrap justify-between items-center">
  <div className="flex flex-col">
    <Link href="/">
      <span className="text-black text-xl font-semibold mb-2">Giselle Ross</span>
      <span className="text-black text-sm font-semibold py-4 px-6">Software engineer</span>
    </Link>
  </div>

  <div className="text-black font-bold space-x-6 flex flex-wrap items-center">
    <Link href="/">Home</Link>
    <Link href="/portfolio">Portfolio</Link>
    <Link href="/aboutMe">About Me</Link>
    <Link href="/contactMe">Contact Me</Link>
  </div>
</div>
  );
}
