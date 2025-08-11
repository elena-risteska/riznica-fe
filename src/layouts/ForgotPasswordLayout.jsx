import { Box, Typography } from "@mui/material";
import photo from "../assets/images/forgot-password.jpg";
import styles from "./styles";
import BackButton from "../components/ui/buttons/BackButton";

const ForgotPasswordLayout = ({ children }) => {
  return (
    <>
      <BackButton />
      <Box sx={styles.fullScreen}>
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={photo}
            alt="login photo"
            sx={styles.photoBox}
          />
          <Typography variant="subtitle1" sx={styles.subtitle}>
            Водопад кај село Ореше
          </Typography>
        </Box>
        <Box sx={styles.form}>{children}</Box>
      </Box>
    </>
  );
};
export default ForgotPasswordLayout;
