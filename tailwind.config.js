/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "!./node_modules", // Explicitly exclude `node_modules`
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
