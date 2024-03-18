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
      normal: {
        bg: "#a8a878",
        color: "#FFF",
      },
      fighting: {
        bg: "#a52a2a",
        color: "#FFF",
      },
      flying: {
        bg: "#6a5acd",
        color: "#FFF",
      },
      poison: {
        bg: "#800080",
        color: "#FFF",
      },
      ground: {
        bg: "#e0c067",
        color: "#0F0F0F",
      },
      rock: {
        bg: "#b8a037",
        color: "#0F0F0F",
      },
      bug: {
        bg: "#808000",
        color: "#FFF",
      },
      ghost: {
        bg: "#705898",
        color: "#FFF",
      },
      steel: {
        bg: "#808080",
        color: "#FFF",
      },
      fire: {
        bg: "#ff0000",
        color: "#FFF",
      },
      water: {
        bg: "#0000ff",
        color: "#FFF",
      },
      grass: {
        bg: "#008000",
        color: "#FFF",
      },
      electric: {
        bg: "#ffd700",
        color: "#0F0F0F",
      },
      psychic: {
        bg: "#d87093",
        color: "#FFF",
      },
      ice: {
        bg: "#e0ffff",
        color: "#0F0F0F",
      },
      dragon: {
        bg: "#7038f8",
        color: "#FFF",
      },
      dark: {
        bg: "#0F0F0F",
        color: "#FFF",
      },
      fairy: {
        bg: "#ee99ac",
        color: "#FFF",
      },
      default: {
        bg: "#a8a878",
        color: "#FFF",
      },
    },
  },
});

export default theme;
