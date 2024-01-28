import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import me from "../../public/me.jpg";
import Aboutme from "../components/aboutme";

export default function About() {
  return (
    <>
      <Header />
      <Aboutme />
    </>
  );
}
