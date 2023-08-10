/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", "135%"],
        sm: ["0.875rem", "100%"],
        smHigher: ["0.875rem", "135%"],
        base: ["1rem", "100%"],
        baseHigher: ["1rem", "135%"],
        lg: ["1.125rem", "100%"],
        xl: ["1.25rem", "135%"],
        "2xl": ["2rem", "100%"],
        "3xl": ["2.5rem", "100%"],
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      width: {
        swiperCurtain: ""
      }, 
      maxWidth: {
        mid: "23.688rem",
        custom: "1016px",
      },
      minHeight: {
        card: "18.563rem",
      },
      colors: {
        background: "#F9F9F7",
        backgroundTransparent: "#f9f9f700",
        black: {
          "05": "#9DA7A2;",
          20: "#BEB9BB",
          50: "#898F8A",
          60: "#EFF1F0",
          70: "#535954",
          100: "#0C2102",
          110: "#000000",
        },
        primary: {
          1: "#7D5353",
          2: "#A97171",
          3: "#C79090",
          4: "#E1D3D9",
        },
        secondary: {
          1: "#E9D1AE",
          2: "#F9EBD7",
          3: "#F6EFE5",
        },
        tertiary: {
          1: "#F5F5F5",
          2: "#FAFAFA",
          3: "#FFFFFF",
        },
        positive: {
          1: "#02730E",
          2: "#EEF9F5",
        },
        negative: {
          1: "#7D1A30",
          2: "#FCF4F7",
        },
        neutral: {
          1: "#15366D",
          2: "#2360C5",
          3: "#F1F4FC",
        },
      },
      boxShadow: {
        custom: "0px 0px 24px 0px rgba(19, 38, 28, 0.03)",
      },
    },
  },
  plugins: [],
};
