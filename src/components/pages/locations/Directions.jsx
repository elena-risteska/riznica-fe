import { Box, Typography } from "@mui/material";
import styles from "./styles";
import photo2 from "../../../assets/images/vodopad2.jpg";

const Directions = ({ mainInfo }) => {
  return (
    <Box sx={styles.detailsBox}>
      <Box sx={styles.textBox}>
        <Typography variant="h5" mb={3}>
          Како да стигнеш дотаму?
        </Typography>
        <Typography variant="body1" lineHeight={2}>
          {mainInfo}
        </Typography>
      </Box>
      <Box
        component="img"
        alt="photo1"
        src={photo2}
        sx={{ width: 300, height: "auto", borderRadius: 8 }}
      />
    </Box>
  );
};

export default Directions;
