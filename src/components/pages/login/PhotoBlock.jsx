import { Box } from "@mui/material";
import photo from "../../../assets/images/login.jpg";
import styles from "./styles";

const PhotoBlock = () => {
  return (
    <Box sx={styles.photoBox}>
      <Box component="img" src={photo} alt="login photo" sx={styles.photo} />
    </Box>
  );
};
export default PhotoBlock;
