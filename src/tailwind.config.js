/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Poppins'", "sans-serif"]
      },
      colors: {
        fondo: "#0F0F0F",
        texto: "#F5F5F5",
        oro: "#D6B36B",
        fucsia: "#FF2B92",
        rosa: "#E961BD",
        cyan: "#32D4DE",
        gris: "#1E1E1E"
      }
    },
  },
  plugins: [],
}
