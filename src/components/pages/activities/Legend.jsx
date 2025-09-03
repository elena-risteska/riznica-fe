import { Box, Typography } from "@mui/material";
import photo from "../../../assets/images/navigator.svg";
import styles from "./styles";

const Legend = ({ text }) => {
  return (
    <Box sx={styles.legendBox}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "40%", lg: "60%" },
        }}
      >
        <Typography variant="h5" mb={2} mt={{ xs: 10, md: 0 }}>
          Легенда
        </Typography>
        <Typography variant="body1" align="justify" lineHeight={2}>
          {text}
        </Typography>
      </Box>
      <Box
        component="img"
        alt="photo"
        src={photo}
        sx={{
          width: { xs: 300, sm: 500, md: 400 },
          height: "auto",
          borderRadius: 8,
        }}
      />
    </Box>
  );
};

export default Legend;
