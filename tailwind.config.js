/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PEACH: "#FFDAB9",
        BLACK: "#000000",
        KIWI: "#8EE53F",
      },
      fontFamily: {
        coco: ["var(--font-cocosharp)"],
        signika: ["var(--font-signika)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
