import { Box, Typography } from "@mui/material";
import aboutPageText from "../../../config/aboutPageText";
import styles from "../styles";
import photo from "../../../assets/images/babuna1.jpg";

const TextSegmentAbout = () => {
  return (
    <Box sx={styles.textColumnBox}>
      <Typography
        variant="body1"
        sx={{ lineHeight: 3, width: { xs: "100%", md: "30%" } }}
      >
        {aboutPageText.leftText}
      </Typography>
      <Box
        component="img"
        src={photo}
        alt="Vodopadot na Babuna"
        sx={styles.imageMiddle}
      />
      <Typography
        variant="body1"
        sx={{ lineHeight: 3, width: { xs: "100%", md: "30%" } }}
      >
        {aboutPageText.rightText}
      </Typography>
    </Box>
  );
};

export default TextSegmentAbout;
