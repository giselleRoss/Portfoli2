"use client";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/GithubIcon.png";
import LinkedinIcon from "../../public/LinkedinIcon.png";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-red-300 py-4 px-6 flex flex-wrap justify-between items-center text-center fixed bottom-0 w-full">
      <div>
        <h2>@ Ross Marketing 2024</h2>
      </div>
      <div className="socials flex flex-row gap-4">
        <Link target="_blank" href="https://github.com/giselleRoss">
          <Image src={GithubIcon} alt="Github Icon" height={25} width={25} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/gisellerosstech"
        >
          <Image
            src={LinkedinIcon}
            alt="Linkedin Icon"
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "25px",
              maxWidth: "25px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}
