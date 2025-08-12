import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import styles from "./styles";
import photo1 from "../../../assets/images/ski.png";
import photo2 from "../../../assets/images/horses.jpg";
import photo3 from "../../../assets/images/paragliding.jpg";

const SegmentThree = () => {
  return (
    <Box sx={styles.row}>
      <Box sx={styles.column}>
        <Box component="img" src={photo1} alt="Activity" sx={styles.photo2} />
        <Box sx={styles.text2}>
          <Typography variant="h3">Скијање и сноубординг</Typography>
          <Typography variant="h6" color="text.secondary">
            Искуси го зимскиот дух на планините
          </Typography>
          <SecondaryButton
            component={RouterLink}
            to="/activities/skiing"
            sx={styles.button2}
          >
            Види повеќе
          </SecondaryButton>
        </Box>
      </Box>
      <Box sx={styles.twoLittle}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
          <Box component="img" src={photo2} alt="Activity" sx={styles.photo3} />
          <Box sx={styles.text3} justifyContent="flex-start">
            <Typography variant="h4">Јавање коњи</Typography>
            <Typography variant="h6" fontWeight={700} color="text.secondary">
              Експедиција што не треба да ја пропуштиш
            </Typography>
            <SecondaryButton
              component={RouterLink}
              to="/activities/horses"
              sx={styles.button2}
            >
              Види повеќе
            </SecondaryButton>
          </Box>
        </Box>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
          <Box component="img" src={photo3} alt="Activity" sx={styles.photo3} />
          <Box sx={styles.text3} justifyContent="flex-end">
            <Typography variant="h4">Параглајдинг</Typography>
            <Typography variant="h6" fontWeight={700} color="text.secondary">
              Адреналин за најхрабрите
            </Typography>
            <SecondaryButton
              component={RouterLink}
              to="/activities/paragliding"
              sx={styles.button2}
            >
              Види повеќе
            </SecondaryButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SegmentThree;
