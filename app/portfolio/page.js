import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import dadJokes from "../../public/dadJokes.jpg"
import PortfolioCom from "../components/portfolio";
import Footer from "../components/Footer";


export default function PortfolioPage() {
  return (
    <>
    <Header />
    <PortfolioCom />
    <Footer />
    </>
    
  )
}
