/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#EF7D00',
          'orange-hover': '#D96E00',
          'orange-light': '#FFF5EB',
          slate: '#495D74',
          'slate-dark': '#344354',
          'slate-light': '#6B7F96',
          navy: '#1A2433',
          dark: '#121820',
          gray: '#525558',
          'gray-light': '#F8F9FA',
          'gray-border': '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Josefin Sans"', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'luxury-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.12)',
        'orange-glow': '0 10px 25px -5px rgba(239, 125, 0, 0.3)',
      },
      letterSpacing: {
        'prestige': '0.15em',
        'subtle': '0.04em',
      }
    },
  },
  plugins: [],
}
