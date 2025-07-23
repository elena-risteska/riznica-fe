import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { routes } from "../../config/routes";
import { styles } from "./styles";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import TextButton from "../ui/buttons/TextButton";

const Navbar = () => {
  const { pathname } = useLocation();
  const navItems = routes.filter((route) => route.showInNav);

  return (
    <AppBar position="sticky" color="white" elevation={5} component="nav">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={styles.riznica} variant="h6">
          Ризница
        </Typography>
        <Box sx={styles.menu}>
          {navItems.map(({ path, label, preload }) => (
            <TextButton
              key={path}
              component={RouterLink}
              to={path}
              isActive={pathname === path}
              onMouseEnter={preload}
              sx={{ borderRadius: "1rem" }}
            >
              {label}
            </TextButton>
          ))}
        </Box>
        <Box sx={styles.login}>
          <PrimaryButton
            sx={{
              width: "30%",
              borderRadius: "1rem",
              py: "0.5rem",
            }}
            component={RouterLink}
            to="/login"
          >
            Најава
          </PrimaryButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
