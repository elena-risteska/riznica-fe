import { Box, Typography } from "@mui/material";
import photo from "../../../assets/images/login.jpg";
import styles from "./styles";

const PhotoBlock = () => {
  return (
    <Box sx={styles.photoBox}>
      <Box>
        <Box component="img" src={photo} alt="login photo" sx={styles.photo} />
        <Typography
          display={{ xs: "none", md: "flex" }}
          variant="subtitle1"
          justifyContent="center"
          sx={styles.subtitle}
        >
          Станечки водопад
        </Typography>
      </Box>
    </Box>
  );
};
export default PhotoBlock;
