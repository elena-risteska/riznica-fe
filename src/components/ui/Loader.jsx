import { CircularProgress, Box } from "@mui/material";
import { styles } from "./styles";

const Loader = () => {
  return (
    <Box sx={styles.loader}>
      <CircularProgress size="5rem" color="info" />
    </Box>
  );
};
export default Loader;
