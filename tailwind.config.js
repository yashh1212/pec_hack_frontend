/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        "geeks-green": "#0f9d58", // Custom GeeksforGeeks green
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 20s linear infinite",
        scrollRight: "scrollRight 20s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        "::selection": {
          backgroundColor: "#0f9d58", // GeeksforGeeks green
          color: "#ffffff", // White text for contrast
        },
      });
    },
  ],
};
