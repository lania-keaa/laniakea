/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-baskerville)"],
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 2.5s ease-in-out forwards",
        title: "title 2.5s ease-out forwards",
        "fade-left": "fade-left 2.5s ease-in-out forwards",
        "fade-right": "fade-right 2.5s ease-in-out forwards",
        nav: "nav 2.5s ease-in-out forwards",
        navbar: "navbar 3.2s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        nav: {
          "0%": {
            opacity: "0%",
          },
          "25%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        navbar: {
          "0%": {
            opacity: "0%",
          },
          "25%": {
            opacity: "0%",
          },
          "50%": {
            transform: "scaleY(0%)",
            opacity: "0%",
          },
          "100%": {
            transform: "scaleY(100%)",
            opacity: "100%",
          },
        }
      },
    },
  },
  plugins: [],
}
