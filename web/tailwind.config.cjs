/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        backgroundChat: "#444654",
        backgroundSidemenu: "#202123",
        hoverSidemenu: "#ffffff1a",
        backgroundHome: "#282c34",
        backgroundChatBoxHome: "#353541",
        backgroundInputHome: "#40414f",
      },
    },
  },
  plugins: [],
};
