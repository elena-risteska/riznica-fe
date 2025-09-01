import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  Menu,
  MenuItem,
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
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = routes.filter((route) => route.showInNav);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const isActiveRoute = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname.startsWith(path + "/");
  };

  const locationTypes = [
    { label: "Водопади и извори", path: "/locations/waterfalls" },
    { label: "Археолошки локалитети", path: "/locations/archeology" },
    { label: "Пештери и карпести формации", path: "/locations/caves" },
    { label: "Кањони и клисури", path: "/locations/canyons" },
    { label: "Културно-историски знаменитости", path: "/locations/landmarks" },
  ];

  return (
    <>
      <AppBar elevation={5} component="nav" sx={styles.navbar}>
        <Toolbar sx={styles.toolbar}>
          <Typography sx={styles.riznica} variant="h6">
            Ризница
          </Typography>

          <Box sx={styles.menu}>
            {navItems.map(({ path, label, preload }, index) =>
              index === 1 ? (
                <Box
                  key={path}
                  onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                  onMouseLeave={() => setAnchorEl(null)}
                >
                  <TextButton
                    isActive={isActiveRoute(path)}
                    sx={{ borderRadius: "1rem" }}
                  >
                    {label}
                  </TextButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    disablePortal
                    disableScrollLock
                    MenuListProps={{
                      onMouseEnter: () => setAnchorEl(anchorEl),
                      onMouseLeave: () => setAnchorEl(null),
                    }}
                    PaperProps={{
                      sx: {
                        mt: 1,
                        minWidth: 125,
                        px: 0.5,
                        py: 1,
                        borderRadius: "1rem",
                        boxShadow: 4,
                      },
                    }}
                  >
                    {locationTypes.map((type) => (
                      <MenuItem
                        key={type.path}
                        component={RouterLink}
                        to={type.path}
                        onClick={() => setAnchorEl(null)}
                        sx={{
                          py: 1.5,
                          borderRadius: "1rem",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        {type.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
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
              )
            )}
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
