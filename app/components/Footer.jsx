import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-red-300 py-4 px-6 flex flex-wrap justify-between items-center text-center">
        <div className="flex md:mt-4 mt-6">
            <Link className="text-indigo-500" href="https://www.linkedin.com/in/gisellerosstech">LinkedIn</Link>
            <Link className="ml-2 text-indigo-500" href="https://github.com/giselleRoss">GitHub</Link>
        </div>
</div>
  );
}