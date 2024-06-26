/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-amber-200 to-amber-50",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      formElement: {
        "label": ['text-black, block, mb-2, text-sm, font-medium, p-6'],
        "input": ['bg-white, border, border-[#33353F], placeholder-[#9CA2A9], text-black, text-sm, block, rounded-lg, w-full, py-2.5, px-5']
      }, 
    },
  },
  plugins: [],
};
