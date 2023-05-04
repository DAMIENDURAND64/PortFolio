/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        ShadowBlur: "3px 3px 12px 3px rgba(255,255,255,0.075)",
      },
      colors: {
        White: "#ffffff",
        Black: "#000000",
        Orange: "#9c4e16",
        WhiteGray: "#b3b2b1",
        Blur: "rgba(255,255,255,0.075)",
        Glass: "rgba(255,255,255,0.15)",
      },
    },
    screens: {
      xxs: "320px",
      mobile: "375px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
