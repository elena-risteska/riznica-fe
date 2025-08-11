import { Box, Typography, Stack } from "@mui/material";
import aboutPageText from "../../../config/aboutPageText";
import styles from "../styles";
import photo from "../../../assets/images/about.jpg";

const TextSegmentAbout = () => {
  return (
    <Box sx={styles.textColumnBox}>
      <Typography
        variant="body1"
        sx={{ lineHeight: 3, width: { xs: "100%", md: "30%" } }}
      >
        {aboutPageText.leftText}
      </Typography>
      <Stack>
        <Box
          component="img"
          src={photo}
          alt="Vodopadot na Babuna"
          sx={styles.imageMiddle}
        />
        <Typography variant="subtitle1" sx={styles.subtitle}>
          Езеро Младост
        </Typography>
      </Stack>
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
