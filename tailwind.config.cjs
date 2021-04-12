module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.svelte"
  ],
  theme: {
    fontFamily: {
      logo: "Pacifico",
      main: "Quicksand, sans-serif",
    },
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#FDCA5C",
          100: "#E3A56C",
        },
        mint: {
          DEFAULT: "#4AE789",
        }
      }
    }
  }
}