/** @type {import('tailwindcss').Config} */
export default {
  /* ./*.{html,js} com esse trecho estou dizendo ao tailwindcss para fazer as alteracoes neste arquivo e no arquivo html */
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

