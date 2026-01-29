/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // الألوان المستوحاة من الموقع
        primary: '#2563eb',      // أزرق
        secondary: '#7c3aed',   // بنفسجي
        dark: '#01020e',        // خلفية داكنة
        light: '#f8fafc',       // خلفية فاتحة
        accent: '#06b6d4',      // لون مميز سماوي
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
}