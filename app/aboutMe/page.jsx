import React from "react";
import Header from "../components/Header";
import Aboutme from "../components/aboutme";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-amber-200">
        <Header />
        <div className="mt-24 mx-auto px-12 py-4">
          <Aboutme />
        </div>
        <Footer />
      </main>
    </>
  );
}
