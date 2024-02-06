import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
      <>
        <section className="bg-amber-200 sm:text-center md:max-xl:flex p-8 md:p-16 lg:p-20 font-serif text-gray-600 body-font relative">
          <div className="py-4 px-6 flex flex-col items-center justify-center">
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <p>Email: gisellerosstech@gmail.com</p>
              <p>Location: Tampa, FL</p>
              <p>
                LinkedIn:{" "}
                <Link href="https://www.linkedin.com/in/gisellerosstech">
                  Giselle's Linkedin
                </Link>
              </p>
              <p>
                GitHub:{" "}
                <Link href="https://github.com/giselleRoss">
                  Giselle's GitHub
                </Link>
              </p>
            </div>
          </div>
        </section>
      </>
  );
}
