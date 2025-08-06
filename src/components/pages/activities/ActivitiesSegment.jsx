import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import styles from "./styles";

const ActivitiesSegment = ({
  title,
  subtitle,
  to,
  reverse,
  photo1,
  photo2,
}) => {
  return (
    <Box sx={styles.row}>
      <Box sx={styles.text(reverse)}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h6" color="text.secondary">
          {subtitle}
        </Typography>
        <SecondaryButton component={RouterLink} to={to} sx={styles.button}>
          Види повеќе
        </SecondaryButton>
      </Box>
      <Box
        component="img"
        src={photo1}
        alt="Activity"
        sx={styles.photo(reverse)}
      />
      <Box
        component="img"
        src={photo2}
        alt="Activity"
        sx={styles.photo(reverse)}
        display={{ xs: "none", md: "flex" }}
      />
    </Box>
  );
};
export default ActivitiesSegment;
