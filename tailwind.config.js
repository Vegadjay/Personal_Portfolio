/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      fontFamily: {
        charm: ['Charmonman', 'cursive'],
        comfortaa: ['Comfortaa', 'cursive'],
        dynapuff: ['DynaPuff', 'cursive'],
        josefin: ['Josefin Sans', 'sans-serif'],
        kablammo: ['Kablammo', 'cursive'],
        merienda: ['Merienda', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        rubikWetPaint: ['Rubik Wet Paint', 'cursive'],
        sixtyfour: ['Sixtyfour Convergence', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
