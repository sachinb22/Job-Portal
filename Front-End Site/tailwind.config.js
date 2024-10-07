/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'custom-card': '0px 1px 24px rgba(77, 83, 255, 0.12)', 
        'custom-1': '1px 2px 10px rgba(77, 83, 255, 0.15)',
        'custom-2': '32px 32px 100px rgba(30, 39, 51, 0.05)',
        'blog-card': '0px 6px 10px rgba(41, 107, 194, 0.25)',
      },
      backdropBlur: {
        'custom-blur': '21px',
      },
      backgroundImage: {
        'blogCard': 'linear-gradient(-180deg, rgba(255, 255, 255, 50%) 59%, rgba(211, 227, 233, 50%) 100%)'
      },

    },
  },
  plugins: [],
}

