/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   fontFamily: {
    //     poppins: ["Poppins", "sans-serif"],
    //     roboto: ["Roboto", "sans-serif"],
    //     heebo: ["Heebo", "sans-serif"],
    //     ubuntu: ["Ubuntu", "sans-serif"],
    //   },
    // },
    extend: {
      colors: {
        "prussian-blue": "#172A3A",
        "jordy-blue": "#92B8FF",
        offwhite: "#FAFCF6",
        almond: "#F3DFC8",
        sunset: "#FFCD91",
      },
      keyframes: {
        sunset: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, 50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-50px, 50px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        jordy: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-50px, 100px) scale(1.1)",
          },
          "66%": {
            transform: "translate(50px, 100px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        prussian: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-100px, -100px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            transform: "translate(-50px, 0px) ",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0px, 0px) ",
            opacity: "1",
          },
        },
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        sunset: "sunset 40s infinite ease-in-out",
        jordy: "jordy 40s infinite ease-in-out",
        prussian: "prussian 40s infinite ease-in-out",
        fade: "fade 0.8s ease-in",
        "fade-in": "fade-in 0.8s ease-in-out",
        "fade-in2": "fade-in 1s ease-in-out",
        "fade-in3": "fade-in 1.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
