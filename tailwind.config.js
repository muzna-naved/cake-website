/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],  // Make sure this points to your HTML files
  theme: {
    extend: {
      colors: {
        customPink: 'hsl(349, 40%, 61%)',  // Custom HSL color
        customOrange: 'hsl(28, 97%, 69%)',  // New custom color
        customYellow: 'hsl(28, 100%, 61%)',
        customdarkpink: 'hsl(349, 45%, 60%)',
        customdarkerpink: 'hsl(349, 50%, 55%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define Poppins font
        titan: ['Titan One', 'cursive'],   // Define Titan One font
      },
      boxShadow: {
         'custom-button-inset': 'inset 0 -4px 8px hsla(0, 0%, 0%, .3)', // Custom inset shadow    
         'custom-inset-circle': 'inset 0 12px 24px hsla(0, 0%, 0%, .4)', // Custom inset shadow
         'card-inset': 'inset 0 -8px 24px hsla(0, 0%, 0%, 0.3)',
    },
    '.filter': {
          'filter': 'drop-shadow(0 12px 24px hsla(0, 0%, 0%, .4))',
        },
  },
},
  plugins: [],
}