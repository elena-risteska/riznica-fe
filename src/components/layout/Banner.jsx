import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "./styles";
import PrimaryButton from "../ui/buttons/PrimaryButton";

const Banner = () => {
  return (
    <Box sx={styles.banner}>
      <Typography variant="h5">Стани дел од ризницата</Typography>
      <PrimaryButton
        sx={styles.primaryInBanner}
        component={RouterLink}
        to="/login"
      >
        Најави се
      </PrimaryButton>
    </Box>
  );
};

export default Banner;
