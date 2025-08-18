import { Box, Typography } from "@mui/material";
import photo1 from "../../../assets/images/vodopad3.jpg";
import styles from "./styles";

const Story = ({ text }) => {
  return (
    <Box sx={styles.storyBox}>
      <Box
        component="img"
        alt="photo"
        src={photo1}
        sx={{ width: 300, height: "auto", borderRadius: 8 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <Typography variant="h5" align="right" mb={2}>
          Легенда
        </Typography>
        <Typography variant="body1" align="right" lineHeight={2}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Story;
