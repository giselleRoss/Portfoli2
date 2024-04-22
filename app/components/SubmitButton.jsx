"use client";
import React from "react";

const SubmitButton = ({ formSubmit }) => {
    return (
      <button
        type="submit"
        aria-busy={formSubmit}
        className={`relative bg-red-300 hover:bg-red-400 text-black font-medium py-2.5 px-5 rounded-lg w-full ${
          formSubmit ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {formSubmit ? (
          <svg
            className="animate-spin h-5 w-5 absolute top-1/2 left-1/2 -mt-2 -ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V2.5A1.5 1.5 0 0113.5 1h-3A1.5 1.5 0 019 2.5V4a8 8 0 01-4 6.928V12zm8 0a4 4 0 100-8 4 4 0 000 8z"
            ></path>
          </svg>
        ) : (
          "Send Message"
        )}
      </button>
    );
  };
  export default SubmitButton;