import { Box, Typography, Chip, Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./styles";
import api from "../../../../api";
import PrimaryButton from "../../ui/buttons/PrimaryButton";

const HeaderDetails = ({
  title,
  location,
  details,
  coords,
  activities,
  mainInfo,
  locationID,
}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await api.get("/users/favorites");
        if (res.data.some((fav) => fav._id === locationID)) {
          setIsFavorite(true);
        }
      } catch (err) {
        console.error("Failed to fetch favorites:", err);
      }
    };
    fetchFavorites();
  }, [locationID]);

  const handleToggleFavorite = async () => {
    setIsLoading(true);
    try {
      if (isFavorite) {
        await api.delete(`/users/favorites/${locationID}`);
        setIsFavorite(false);
        setSnackbarMessage("Локацијата е отстранета од омилени!");
        setSnackbarSeverity("info");
      } else {
        await api.post(`/users/favorites/${locationID}`);
        setIsFavorite(true);
        setSnackbarMessage("Локацијата е додадена во омилени!");
        setSnackbarSeverity("success");
      }
      setOpenSnackbar(true);
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
      setSnackbarMessage("Грешка при зачувување на омилени.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={styles.detailsBox}>
      <Box sx={styles.textBox}>
        <PrimaryButton
          sx={{
            color: isFavorite ? "primary.main" : "white",
            backgroundColor: !isFavorite ? "primary.main" : "transparent",
            border: isFavorite ? "5px solid" : "none",
            borderColor: isFavorite ? "primary.main" : "transparent",
            borderRadius: 4,
            width: "30%",
            mb: 10,
            "&:hover": {
              backgroundColor: !isFavorite ? "primary.dark" : "transparent",
              borderColor: isFavorite ? "primary.dark" : "transparent",
            },
          }}
          onClick={handleToggleFavorite}
          disabled={isLoading}
        >
          {isLoading
            ? "Се зачувува..."
            : isFavorite
            ? "Омилена"
            : "Додај во омилени"}
        </PrimaryButton>

        <Typography variant="body1" lineHeight={2}>
          {mainInfo}
        </Typography>
      </Box>

      <Box sx={styles.yellowBox}>
        <Typography variant="h4" mb={4}>
          {title}
        </Typography>
        <Typography variant="body1" mb={1} fontWeight={600}>
          Местоположба: {location}
        </Typography>
        {coords?.length === 2 && (
          <Typography variant="body1" mb={1} fontWeight={600}>
            Координати: {coords[0]}, {coords[1]}
          </Typography>
        )}
        {details?.map((item, index) => (
          <Typography
            key={index}
            variant="body1"
            mb={index !== details.length - 1 ? 1 : 4}
            fontWeight={600}
          >
            {item}
          </Typography>
        ))}
        <Box display="flex" flexDirection="row" gap={2}>
          {activities?.map((item, index) => (
            <Chip
              key={index}
              label={item}
              color="primary"
              variant="filled"
              sx={{ fontWeight: 600, color: "white", minWidth: 150 }}
            />
          ))}
        </Box>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: 4,
            boxShadow: 3,
            fontWeight: 500,
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HeaderDetails;
