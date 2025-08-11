import { Box, Typography } from "@mui/material";
import photo from "../../../assets/images/login.jpg";
import styles from "./styles";

const PhotoBlock = () => {
  return (
    <Box sx={styles.photoBox}>
      <Box sx={{ textAlign: "center" }}>
        <Box component="img" src={photo} alt="login photo" sx={styles.photo} />
        <Typography variant="subtitle1" sx={styles.subtitle}>
          Станечки водопад
        </Typography>
      </Box>
    </Box>
  );
};
export default PhotoBlock;
