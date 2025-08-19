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
        sx={{
          width: { xs: 300, sm: 500, md: 300 },
          height: "auto",
          borderRadius: 8,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "40%", lg: "60%" },
        }}
      >
        <Typography variant="h5" align="right" mb={2} mt={{ xs: 10, md: 0 }}>
          Приказна
        </Typography>
        <Typography variant="body1" align="justify" lineHeight={2}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Story;
