/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          300: "#803A85",
          400: "#733477",
        },
        accent: {
          400: "#1E124C",
        },
        secondary: {
          200: "#F8E4E5",
          400: "#EFC7C7",
        },
      },
    },
  },
  plugins: [],
};
