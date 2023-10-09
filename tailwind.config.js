/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: "#F5E6FB",
        dpurple: "#8A3AB7",
        back: "#1F1F1F",
        box1: "#286472",
        box2: "#595654",
        box3: "#202C51",
        box4: "#1A224C",
        box5: "#697448",
        box6: "#5A6476",
        box7: "#000000",
        namebg: "#292828",
        tool: "#2B2C33",
      },

      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
