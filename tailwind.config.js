/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "minus-translate-x-100": "-translate-x-100 55s linear infinite",
        "minus-translate-x-100-sm": "-translate-x-100-sm 55s linear infinite",
        "translate-x-100": "translate-x-100 55s linear infinite",
        "translate-x-100-sm": "translate-x-100-sm 55s linear infinite",
      },
      keyframes: {
        "-translate-x-100-sm": {
          "0%, 100%": {
            transform: "translateX(25%)",
          },
          "50%": {
            transform: "translateX(-25%)",
          },
        },
        "-translate-x-100": {
          "0%, 100%": {
            transform: "translateX(100%)",
          },
          "50%": {
            transform: "translateX(-100%)",
          },
        },
        "translate-x-100-sm": {
          "0%, 100%": {
            transform: "translateX(-50%)",
          },
          "50%": {
            transform: "translateX(50%)",
          },
        },
        "translate-x-100": {
          "0%, 100%": {
            transform: "translateX(100%)",
          },
          "50%": {
            transform: "translateX(-100%)",
          },
        },
      },

      fontFamily: {
        sans: ["var(--font-cocosharp)"],
        pars: ["var(--font-persisienne)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
