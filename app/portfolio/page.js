import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import dadJokes from "../../public/dadJokes.jpg"
import PortfolioCom from "../components/portfolio";
import Footer from "../components/Footer";


export default function PortfolioPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-amber-200">
        <Header />
        <div className="mt-24 mx-auto px-12 py-4">
          <PortfolioCom />
        </div>
        <Footer />
      </main>
    </>
    
  )
}
