import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import PrimaryButton from "./PrimaryButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.backButton}>
      <PrimaryButton
        startIcon={<ArrowBackIcon />}
        sx={{ borderRadius: 4 }}
        onClick={() => navigate("/")}
      >
        Дома
      </PrimaryButton>
    </Box>
  );
};

export default BackButton;
