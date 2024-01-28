import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-pink-200 py-4 px-6 flex flex-wrap justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-black text-xl font-semibold">Welcome!</span>
        </Link>
      </div>

      {/* Right Side (Navigation) */}
      <div className="text-black space-x-6 flex flex-wrap items-center">
        <Link href="/">Home</Link>
        <Link href="/aboutMe">About Me</Link>
        <Link href="/contactMe">Contact Me</Link>
      </div>
    </div>
  );
}
