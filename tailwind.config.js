/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        animation: {
          "pulse-glow": "pulseGlow 2s infinite ease-in-out",
        },
        keyframes: {
          pulseGlow: {
            "0%, 100%": {
              transform: "scale(1)",
              boxShadow: "0 0 3px 3px rgba(0, 255, 0, 0.5)",
            },
            "50%": {
              transform: "scale(.5)",
              boxShadow: "0 0 5px 4px rgba(0, 255, 0, 0.8)",
            },
          },
        },
      },
    },
    darkMode: 'class', // Enable class-based dark mode
    plugins: [],
  };
  