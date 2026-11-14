/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#102A56', deep: '#0B1D3D' },
        royal: { DEFAULT: '#174EA6', soft: '#2A63C0' },
        sky: { DEFAULT: '#DCEBFA', soft: '#EEF5FD' },
        mist: '#F5F7FA',
        ink: '#182334',
        jred: '#CE1126',
        jgreen: '#007A3D',
      },
      fontFamily: {
        sans: ['Tajawal', 'IBM Plex Sans Arabic', 'Cairo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
