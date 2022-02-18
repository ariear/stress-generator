module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pupy': ['"Poppins"', 'sans-serif'],
        'ubuntu': ['"Ubuntu"', 'sans-serif'],
        'varela': ['"Varela', 'sans-serif']
      },
      colors: {
        custom: {
            DEFAULT: '#10B981',
            light: '#D1FAE5'
        }
    }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
