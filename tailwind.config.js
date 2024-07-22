/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgb(41, 47, 86), rgb(30, 69, 114), rgb(0, 92, 139), rgb(0, 116, 152), rgb(0, 139, 160), rgb(0, 163, 164), rgb(0, 188, 161), rgb(0, 212, 147), rgb(105, 232, 130), rgb(172, 250, 112))",
      },

      keyframes: {
        expand: {
          "0%": { width: "0rem" },
          // "10%": { width: "6rem" },
          // "20%": { width: "8rem" },
          // "30%": { width: "10rem" },
          // "40%": { width: "12rem" },
          // "50%": { width: "10rem" },
          // "60%": { width: "16rem" },
          // "70%": { width: "18rem" },
          // "80%": { width: "20rem" },
          // "90%": { width: "22rem" },
          "100%": { width: "20rem" },
        },
        collapse: {
          "0%": { width: "20rem" },
          // "10%": { width: "22rem" },
          // "20%": { width: "20rem" },
          // "30%": { width: "18rem" },
          // "40%": { width: "16rem" },
          // "50%": { width: "14rem" },
          // "60%": { width: "12rem" },
          // "70%": { width: "10rem" },
          // "80%": { width: "8rem" },
          // "90%": { width: "6rem" },
          "100%": { width: "0rem" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0px)" },
          "90%": { opacity: 1, transform: "translateY(0px)" },

          "100%": { opacity: 0, transform: "translateY(16px)" },
        },

        delay: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "50%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        rtl: {
          "0%": { opacity: 0, transform: "translateX(10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        ltr: {
          "0%": { opacity: 0, transform: "translateX(-10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        floating: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0px)" },
        },
        topDown: {
          "0%": { opacity: 0, transform: "translateY(-50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        spinReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        descExpand: {
          "0%": { width: "0rem" },

          "100%": { width: "100%" },
        },
        halfAppear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.5 },
        },
      },
      animation: {
        expand: "expand 0.5s ease-in-out",
        collapse: "collapse 0.5s ease-in-out",
        fade: "fadeIn .6s ease-in-out",
        fadeOut: "fadeOut 5s ease-in-out",
        delay: "delay .8s ease-in-out",
        rtl: "rtl .6s ease-in-out",
        ltr: "ltr .6s ease-in-out",
        floating: "floating 3s ease-in-out infinite",
        topDown: "topDown 0.4s ease-in-out",
        spinReverse: "spinReverse 1s linear infinite",
        descExpand: "descExpand 0.6s ease-in-out",
        halfAppear: "appear 0.6s ease-in-out",
      },
    },
    screens: {
      sm: "534px", // pc dev
      md: "640px", // Tablet M9 แนวตั้ง M9-2
      lg: "1072px", // Tablet M9 แนวนอน M9
      xl: "1340px",
      "2xl": "1912px", //pc dev
    },
    container: {
      padding: {
        DEFAULT: "0.5rem",
        md: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    fontFamily: {
      Poppins: ['"Poppins"', "sans-serif"],
      PressStart2P: ['"Press Start 2P"', "sans-serif"],
      Inter: ['"Inter Variable"', "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
    // darkTheme: "dark", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true, // adds responsive and modifier utility classes
    // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    // logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    // themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
