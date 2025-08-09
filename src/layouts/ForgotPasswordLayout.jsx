import { Box } from "@mui/material";
import photo from "../assets/images/forgot-password.jpg";
import styles from "./styles";

const ForgotPasswordLayout = ({ children }) => {
  return (
    <Box sx={styles.fullScreen}>
      <Box component="img" src={photo} alt="login photo" sx={styles.photoBox} />
      <Box sx={styles.form}>{children}</Box>
    </Box>
  );
};
export default ForgotPasswordLayout;
