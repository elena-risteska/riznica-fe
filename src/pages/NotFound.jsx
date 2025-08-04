import { Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./styles";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";

const NotFound = () => {
  return (
    <Box sx={styles.notFoundBox}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1.2, 1], opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h1" color="info" fontWeight="bold">
          404
        </Typography>
      </motion.div>
      <Typography variant="h5" my={2}>
        Страницата не е пронајдена
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={5}>
        Изгледа дека страницата што ја барате не постои или е преместена.
      </Typography>
      <PrimaryButton component={RouterLink} to="/" sx={styles.backHome}>
        Назад на почетна
      </PrimaryButton>
    </Box>
  );
};
export default NotFound;
