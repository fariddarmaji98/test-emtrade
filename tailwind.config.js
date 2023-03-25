/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
    },
    extend: {
      colors: {
        "cs-black": "#333333",
        "cs-warning": "#FF9441",
        "cs-neutral": "#F5F5F5",
        "cs-black": "#333333"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'inter': ['Inter', 'sans-serif']
      },
      boxShadow: {
        "cs-1": "0px 4px 16px #EEEEEE;"
      }
    },
  },
  plugins: [],
}
