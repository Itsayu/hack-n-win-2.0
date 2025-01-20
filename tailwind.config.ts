// import type { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         squidPink: '#FF0067',
//         squidTeal: '#98fff1',
//         darkBg: '#171717',
//       },
//       animation: {
//         'float-slow': 'float 6s ease-in-out infinite',
//         'float-medium': 'float 5s ease-in-out infinite',
//         'float-fast': 'float 4s ease-in-out infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
//           '50%': { transform: 'translateY(-20px) rotate(180deg)' },
//         },
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),  // Ensure this is installed
//     require('@tailwindcss/typography'),
//     require('@tailwindcss/aspect-ratio'),
//     require('@tailwindcss/line-clamp'),
//     require('tailwindcss-filters'), // Enables utilities like `backdrop-blur`
//   ],
// };

// export default config;











import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        squidPink: '#FF0067',
        squidTeal: '#98fff1',
        darkBg: '#171717',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(360deg)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      clipPath: {
        hexagon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        star: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-filters'),
    require('tailwind-clip-path'),
  ],
};

export default config;
