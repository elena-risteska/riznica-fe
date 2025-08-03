import { Box, Typography, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styles from "./styles";
import SecondaryButton from "../ui/buttons/SecondaryButton";
import map from "../../assets/images/legend.webp";

const MapHome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        px: { xs: 1, md: 7 },
        py: 8,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100", md: "50%" },
          justifyContent: "space-evenly",
        }}
      >
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
          sx={{
            width: { xs: "80%", sm: "40%", lg: "25%" },
            borderRadius: 4,
            border: 3,
            mt: { xs: 2, sm: 0 },
            mx: { xs: "auto", md: 0 },
          }}
        >
          Види мапа
        </SecondaryButton>
      </Box>
      <Box
        component="img"
        src={map}
        alt="Map"
        width={{ xs: "100", md: "50%" }}
        height="auto"
        borderRadius={10}
      />
    </Box>
  );
};

export default MapHome;
