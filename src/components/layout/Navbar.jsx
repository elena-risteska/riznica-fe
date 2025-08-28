import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
} from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../config/routes";
import { styles } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import TextButton from "../ui/buttons/TextButton";

const Navbar = () => {
  const { pathname } = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = routes.filter((route) => route.showInNav);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const isActiveRoute = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <>
      <AppBar elevation={5} component="nav" sx={styles.navbar}>
        <Toolbar sx={styles.toolbar}>
          <Typography sx={styles.riznica} variant="h6">
            Ризница
          </Typography>
          <Box sx={styles.menu}>
            {navItems.map(({ path, label, preload }) => (
              <TextButton
                key={path}
                component={RouterLink}
                to={path}
                isActive={isActiveRoute(path)}
                onMouseEnter={preload}
                sx={{ borderRadius: "1rem" }}
              >
                {label}
              </TextButton>
            ))}
          </Box>
          <Box sx={styles.login}>
            <PrimaryButton
              sx={styles.primaryInNavbar}
              component={RouterLink}
              to="/login"
              color="primary"
            >
              Најава
            </PrimaryButton>
          </Box>
          <IconButton onClick={toggleDrawer} color="info" sx={styles.menuIcon}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={styles.drawer}
      >
        <List sx={styles.list}>
          {navItems.map(({ path, label }) => (
            <TextButton
              key={path}
              component={RouterLink}
              to={path}
              isActive={isActiveRoute(path)}
              onClick={toggleDrawer}
              sx={{ borderRadius: "1rem" }}
            >
              {label}
            </TextButton>
          ))}
          <Box textAlign="center" mt={5}>
            <PrimaryButton
              component={RouterLink}
              to="/login"
              onClick={toggleDrawer}
              sx={{ borderRadius: 4, color: "white" }}
              color="primary"
            >
              Најава
            </PrimaryButton>
          </Box>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
