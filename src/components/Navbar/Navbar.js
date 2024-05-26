import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

import logo from "../../PokemonLogo.png";

const NavbarMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerWidth = 240;
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  return (
    <AppBar position="static" color="pokemon" component="nav">
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
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                backgroundColor: "#FFC531",
              },
            }}
            anchor="left"
          >
            <DrawerHeader>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <Typography color="pokemon.contrastText" sx={{ fontSize: 24 }}>
                  X
                </Typography>
              </IconButton>
            </DrawerHeader>
            <Divider />
            <Link
              underline="none"
              color="grey.900"
              href="#/pokemon"
              sx={{ paddingLeft: 5, paddingTop: 2 }}
            >
              Pokemon
            </Link>
            <Link
              underline="none"
              color="grey.900"
              href="#/type/1"
              sx={{ paddingLeft: 5, paddingTop: 2 }}
            >
              Tipos
            </Link>
          </Drawer>
        </Box>
        <Link href="#/" underline="none">
          <img src={logo} width="150" height="50" alt="logo" />
        </Link>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ paddingX: 1, display: { xs: "none", md: "flex" } }}
        />
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
