import { Box, Typography, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styles from "../styles";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import map from "../../../assets/images/legend.webp";

const MapHome = () => {
  return (
    <Box sx={styles.mapHome}>
      <Box sx={styles.mapText}>
        <Typography variant="h4" mb={{ xs: 3, md: 0 }}>
          Мапа
        </Typography>
        <Stack spacing={1} textAlign="left" mb={{ xs: 3, md: 0 }}>
          <Typography variant="body1" fontWeight={600}>
            Најлесен начин да истражуваш
          </Typography>
          <Typography variant="body1">
            Македонија ти е на дланка, погледни кои богатства ги крие.
          </Typography>
        </Stack>
        <Stack spacing={1} textAlign="left" mb={{ xs: 3, md: 0 }}>
          <Typography variant="body1" fontWeight={600}>
            Интерактивна мапа која ти помага
          </Typography>
          <Typography variant="body1">
            Можеш да пребаруваш по региони, знаменитости или традиции. Одбираш
            ти.
          </Typography>
        </Stack>
        <SecondaryButton
          component={RouterLink}
          to="/map"
          sx={styles.secondaryMap}
        >
          Види мапа
        </SecondaryButton>
      </Box>
      <Box component="img" src={map} alt="Map" sx={styles.mapLegend} />
    </Box>
  );
};

export default MapHome;
