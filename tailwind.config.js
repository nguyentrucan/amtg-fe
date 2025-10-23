/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
      colors: {
        brand: {
          DEFAULT: "#0ea5e9", // xanh cho thương hiệu studio
          dark: "#0284c7",
          light: "#38bdf8",
        },
      },
    },
  },
  plugins: [],
};
