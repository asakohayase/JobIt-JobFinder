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
        "natural-1": "#F4F4F4",
        "natural-2": "#F1F1F5",
        "natural-3": "#FAFAFB",
        "natural-4": "#F5F5F8",
        "natural-5": "#E2E2EA",
        "natural-6": "#92929D",
        "natural-7": "#696974",
        "natural-8": "#44444F",
        primary: "#0BAB7C",
        "secondary-1": "#C7F4C2",
        "secondary-2": "#D7D0FF",
        "secondary-3": "#FDDD8C",
        "secondary-4": "#FFBBD7",
        "darkBG-1": "#13131A",
        "darkBG-2": "#1C1C24",
        "darkBG-3": "#21212B",
        black: "#171725",
      },
    },
  },
  plugins: [],
};
