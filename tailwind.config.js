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
        dropShadow: {
          'html5': '0 0 2em hsl(13, 77%, 52%, 0.67)',
          'css3': '0 0 2em hsl(222, 88%, 55%, 0.67)',
          'javascript': '0 0 2em hsl(53, 93%, 54%, 0.67)',
          'react': '0 0 2em hsl(193, 95%, 68%, 0.67)',
          'tailwind': '0 0 2em hsl(198, 93%, 60%, 0.67)',
          'wordpress': '0 0 2em hsl(199, 65%, 37%, 0.67)',
          'git': '0 0 2em hsl(9, 86%, 57%, 0.67)',
          'firebase': '0 0 2em hsl(45, 100%, 58%, 0.67)',
        }
      },
    },
    darkMode: 'class', // Enable class-based dark mode
    plugins: [],
  };
  