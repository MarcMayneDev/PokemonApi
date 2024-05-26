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
      bug: {
        bg: "#808000",
        color: "#FFF",
      },
      dark: {
        bg: "#0F0F0F",
        color: "#FFF",
      },
      dragon: {
        bg: "#7038f8",
        color: "#FFF",
      },
      electric: {
        bg: "#ffd700",
        color: "#0F0F0F",
      },
      fairy: {
        bg: "#ee99ac",
        color: "#0F0F0F",
      },
      fighting: {
        bg: "#a52a2a",
        color: "#FFF",
      },
      fire: {
        bg: "#ff0000",
        color: "#FFF",
      },
      flying: {
        bg: "#6a5acd",
        color: "#FFF",
      },
      ghost: {
        bg: "#705898",
        color: "#FFF",
      },
      grass: {
        bg: "#008000",
        color: "#FFF",
      },
      ground: {
        bg: "#e0c067",
        color: "#0F0F0F",
      },
      ice: {
        bg: "#e0ffff",
        color: "#0F0F0F",
      },
      normal: {
        bg: "#a8a878",
        color: "#FFF",
      },
      poison: {
        bg: "#800080",
        color: "#FFF",
      },
      psychic: {
        bg: "#d87093",
        color: "#0F0F0F",
      },
      rock: {
        bg: "#b8a037",
        color: "#0F0F0F",
      },
      steel: {
        bg: "#808080",
        color: "#FFF",
      },
      water: {
        bg: "#0000ff",
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
