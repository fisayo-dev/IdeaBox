/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md-custom-breakpoint': '974px',
        'lg-custom-breakpoint': '1260px',
        // Add other custom breakpoints as needed
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        load: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '100%': { transform: 'translateX(100%)', opacity: '1' },  
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '100%': { transform: 'translateX(-100%)', opacity: '1' },
        },
      },
      animation: {
        spinner: 'spinner 1s ease-in-out infinite',
        scale: 'scale 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        load: 'load 2s ease-in-out infinite',
        slideInLeft: 'slideInLeft 0.05s forwards',
        slideOutLeft: 'slideOutLeft 0.06s forwards',
        slideInRight: 'slideInRight 0.05s forwards',
        slideOutRight: 'slideOutRight 0.06s forwards',
        slideInTop: 'slideInTop 1s forwards',
        slideInBottom: 'slideInBottom 1s forwards',
      },
    },
  },
  plugins: [],
}