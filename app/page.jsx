import React from 'react';
import Header from "./components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <Footer />
    </div>
    </>
  );
}