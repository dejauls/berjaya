module.exports = {
   
  content: ['./*.html', './**/*.html'],
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      },
      colors: {
        'krim': '#F5EAB9', 
      },
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif'],
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}



