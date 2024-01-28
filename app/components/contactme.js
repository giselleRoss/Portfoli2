import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className=" py-4 px-6 flex flex-col items-center justify-center">
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <p>Email: gisellerosstech@gmail.com</p>
            <p>Phone: 951-483-9111</p>
            <p>Location: Tampa, FL</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/gisellerosstech"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/gisellerosstech
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/giselleRoss"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/giselleRoss
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
