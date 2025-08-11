import { Box } from "@mui/material";
import LoginBlock from "../components/pages/login/LoginBlock";
import PhotoBlock from "../components/pages/login/PhotoBlock";
import styles from "./styles";
import BackButton from "../components/ui/buttons/BackButton";

const Login = () => {
  return (
    <>
      <BackButton />
      <Box sx={styles.loginLayout}>
        <PhotoBlock />
        <LoginBlock />
      </Box>
    </>
  );
};
export default Login;
