/* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: ["tailwind-scrollbar"],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        suse: ["Suse", "sans-serif"],
        Protest: ["Protest Guerrilla", "sans-serif"],
        indieFLower: [" Indie Flower", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
