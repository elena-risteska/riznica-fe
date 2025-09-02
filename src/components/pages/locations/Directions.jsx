import { Box, Typography } from "@mui/material";
import styles from "./styles";
import photo2 from "../../../assets/images/vodopad2.jpg";

const Directions = ({ mainInfo }) => {
  return (
    <Box sx={styles.detailsBox}>
      <Box
        component="img"
        alt="photo1"
        src={photo2}
        sx={{
          width: { xs: 300, sm: 500, md: 300 },
          height: "auto",
          borderRadius: 8,
        }}
      />
      <Box sx={styles.textBox}>
        <Typography variant="h5" mb={3}>
          Како да стигнеш дотаму?
        </Typography>
        <Typography variant="body1" lineHeight={2}>
          {mainInfo}
        </Typography>
      </Box>
    </Box>
  );
};

export default Directions;
