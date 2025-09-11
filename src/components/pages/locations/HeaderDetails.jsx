import {
  Box,
  Typography,
  Chip,
  Snackbar,
  Alert,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import { useState, useEffect, useContext } from "react";
import styles from "./styles";
import api from "../../../../api";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import { UserContext } from "../../../UserContext";

const HeaderDetails = ({
  title,
  location,
  details,
  coords,
  activities,
  mainInfo,
  locationID,
}) => {
  const { user } = useContext(UserContext);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [editData, setEditData] = useState({
    title: title || "",
    description: "",
    mainInfo: mainInfo || "",
    directions: "",
    hiking: "",
    biking: "",
    legend: "",
    place: location || "",
    type: "",
    details: details?.join("\n") || "",
    coords: coords?.join(",") || "",
    activities: activities?.join("\n") || "",
  });

  useEffect(() => {
    if (user?.role === "user") {
      const fetchFavorites = async () => {
        try {
          const res = await api.get("/users/favorites");
          if (res.data.some((fav) => fav._id === locationID))
            setIsFavorite(true);
        } catch (err) {
          console.error("Failed to fetch favorites:", err);
        }
      };
      fetchFavorites();
    }
  }, [locationID, user?.role]);

  // --- Favorite toggle ---
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

  // --- Edit form handlers ---
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...editData,
        details: editData.details.split("\n"),
        activities: editData.activities.split("\n"),
        coords: editData.coords.split(",").map(Number),
      };

      await api.put(`/locations/${locationID}`, payload);
      setOpenEditModal(false);
      setSnackbarMessage("Локацијата е успешно изменета!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (err) {
      console.error("Failed to edit location:", err);
      setSnackbarMessage("Грешка при изменување на локацијата.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  // --- Delete location ---
  const handleDelete = async () => {
    if (!confirm("Дали сте сигурни дека сакате да ја избришете оваа локација?"))
      return;
    try {
      await api.delete(`/locations/${locationID}`);
      setSnackbarMessage("Локацијата е избришана!");
      setSnackbarSeverity("info");
      setOpenSnackbar(true);
    } catch (err) {
      console.error("Failed to delete location:", err);
      setSnackbarMessage("Грешка при бришење на локацијата.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <Box sx={styles.detailsBox}>
      <Box sx={styles.textBox}>
        {/* Role-based buttons */}
        {user?.role === "user" && (
          <PrimaryButton
            sx={{
              color: isFavorite ? "primary.main" : "white",
              backgroundColor: !isFavorite ? "primary.main" : "transparent",
              border: isFavorite ? "2px solid" : "none",
              borderColor: isFavorite ? "primary.main" : "transparent",
              borderRadius: 4,
              width: "30%",
              mb: 2,
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
        )}

        {user?.role === "admin" && (
          <Box display="flex" gap={2} mb={6}>
            <PrimaryButton
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: 4,
                width: "30%",
              }}
              onClick={() => setOpenEditModal(true)}
            >
              Измени
            </PrimaryButton>
            <PrimaryButton
              sx={{
                backgroundColor: "info.main",
                color: "white",
                borderRadius: 4,
                width: "30%",
              }}
              onClick={handleDelete}
            >
              Избриши
            </PrimaryButton>
          </Box>
        )}

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

      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Box
          component="form"
          onSubmit={handleEditSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            width: { xs: "90%", sm: 600 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" align="center">
            Измени Локација
          </Typography>

          {[
            "title",
            "description",
            "mainInfo",
            "directions",
            "hiking",
            "biking",
            "legend",
            "place",
            "type",
            "details",
            "coords",
            "activities",
          ].map((field) => (
            <TextField
              key={field}
              label={field}
              name={field}
              value={editData[field]}
              onChange={handleEditChange}
              multiline={["details", "coords", "activities"].includes(field)}
              rows={["details", "activities"].includes(field) ? 3 : 1}
              required
              fullWidth
            />
          ))}

          <PrimaryButton
            type="submit"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: 4,
            }}
          >
            Зачувај
          </PrimaryButton>
        </Box>
      </Modal>

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
          sx={{ width: "100%", borderRadius: 4, boxShadow: 3, fontWeight: 500 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HeaderDetails;
