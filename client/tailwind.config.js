/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // predefined colors
      colors: {
        primary: "#3B82F6",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
};
