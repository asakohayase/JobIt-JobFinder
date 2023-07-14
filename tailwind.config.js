/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        natural1: "#F4F4F4",
        natural2: "#F1F1F5",
        natural3: "#FAFAFB",
        natural4: "#F5F5F8",
        natural5: "#E2E2EA",
        natural6: "#92929D",
        natural7: "#696974",
        natural8: "#44444F",
        primary: "#0BAB7C",
        secondary1: "#C7F4C2",
        secondary2: "#D7D0FF",
        secondary3: "#FDDD8C",
        secondary4: "#FFBBD7",
        darkBG1: "#13131A",
        darkBG2: "#1C1C24",
        darkBG3: "#21212B",
        black: "#171725",
      },
    },
  },
  plugins: [],
};
