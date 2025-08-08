import { Box } from "@mui/material";
import LoginBlock from "../components/pages/login/LoginBlock";
import PhotoBlock from "../components/pages/login/PhotoBlock";
import styles from "./styles";

const Login = () => {
  return (
    <Box sx={styles.loginLayout}>
      <PhotoBlock />
      <LoginBlock />
    </Box>
  );
};
export default Login;
