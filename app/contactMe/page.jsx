import React from "react";
import Header from "../components/Header";
import Contact from "../components/contactme";
import Footer from "../components/Footer";
import { FormProvider } from "../context/context";
// import { FormProvider, AppContext } from "../context/context";

export default function Contactpage() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Header />
        <div className="mt-24 mx-auto px-12 pb-4">
            <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
