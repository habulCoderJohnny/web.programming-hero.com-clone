/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/images/bg.png')",
        'footer': "url('/src/assets/images/footer.png')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        projectTheme: {
          primary: "#FF136F",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}