/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        accent: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
        glow: {
          400: "#f472b6",
          500: "#ec4899",
        },
        canvas: "#020617",
        ink: {
          100: "#f8fafc",
          300: "#cbd5e1",
          500: "#94a3b8",
          700: "#475569",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(15, 23, 42, 0.24)",
        glow: "0 24px 80px -30px rgba(99, 102, 241, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
