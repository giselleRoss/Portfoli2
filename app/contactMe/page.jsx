import React from "react";
import Header from "../components/Header";
import Contact from "../components/contactme";
import Footer from "../components/Footer";
import { FormProvider, AppContext } from "../context/context";


export default function Contactpage() {
  return (
    <>
    <FormProvider>
      <main className="flex min-h-screen flex-col bg-amber-200">
        
<Header />
        <div className="mt-24 mx-auto px-12 py-4">
          <Contact />
        </div>
        <Footer />

       
        
      </main> 
      </FormProvider>
    </>
  );
}
