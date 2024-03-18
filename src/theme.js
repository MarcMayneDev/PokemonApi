import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    pokemon: {
      main: "#FFC531",
      light: "#E9DB5D",
      dark: "#FFA400",
      contrastText: "#B43000",
    },
    tipos: {
      normal: "#a8a878",
      fighting: "#a52a2a",
      flying: "#6a5acd",
      poison: "#800080",
      ground: "#e0c067",
      rock: "#b8a037",
      bug: "#808000",
      ghost: "#705898",
      steel: "#808080",
      fire: "#ff0000",
      water: "#0000ff",
      grass: "#008000",
      electric: "#ffd700",
      psychic: "#d87093",
      ice: "#e0ffff",
      dragon: "#7038f8",
      dark: "#000000",
      fairy: "#ee99ac",
      default: "#a8a878",
      contrastText: "#B43000",
    },
  },
});

export default theme;
