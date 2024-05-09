import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Drawer, IconButton, Link, Toolbar } from "@mui/material";
import React, { useState } from "react";

import logo from "../../PokemonLogo.png";

const NavbarMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="sticky" color="pokemon" component="nav">
      <Toolbar>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Link underline="none" color="grey.900" href="#/pokemon">
              Pokemon
            </Link>
          </Drawer>
        </Box>
        <Link href="#/" underline="none">
          <img src={logo} width="150" height="50" alt="logo" />
        </Link>
        <Box
          gap="16px"
          paddingX="24px"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Link underline="none" color="grey.900" href="#/pokemon">
            Pokedex
          </Link>
          <Link underline="none" color="grey.900" href="#/type/1">
            Tipos
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMenu;
