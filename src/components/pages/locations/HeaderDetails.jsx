import {
  Box,
  Typography,
  Chip,
  Snackbar,
  Alert,
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
  description,
  directions,
  hiking,
  biking,
  legend,
  location,
  details,
  activities,
  mainInfo,
  locationID,
  region,
  type,
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
    description: description || "",
    mainInfo: mainInfo || "",
    directions: directions || "",
    hiking: hiking || "",
    biking: biking || "",
    legend: legend || "",
    place: location || "",
    region: region || "",
    type: type || "",
    details: details?.join("\n") || "",
    activities: activities?.join("\n") || "",
    images: [],
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

  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setEditData((prev) => ({ ...prev, images: files }));
    } else {
      setEditData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Text fields
      formData.append("title", editData.title);
      formData.append("description", editData.description);
      formData.append("mainInfo", editData.mainInfo);
      formData.append("directions", editData.directions);
      formData.append("hiking", editData.hiking);
      formData.append("biking", editData.biking);
      formData.append("legend", editData.legend);
      formData.append("place", editData.place);
      formData.append("region", editData.region);
      formData.append("type", editData.type);

      // Details & activities as individual fields, not JSON
      editData.details
        .split("\n")
        .filter((d) => d.trim())
        .forEach((d) => formData.append("details", d));

      editData.activities
        .split("\n")
        .filter((a) => a.trim())
        .forEach((a) => formData.append("activities", a));

      // Images
      if (editData.images && editData.images.length > 0) {
        Array.from(editData.images).forEach((file) =>
          formData.append("images", file)
        );
      }

      await api.put(`/locations/${locationID}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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
                backgroundColor: "error.main",
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
        <Typography variant="body1" mb={1} fontWeight={600}>
          Регион: {region}
        </Typography>
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
            { label: "Наслов", name: "title" },
            { label: "Краток опис", name: "description" },
            { label: "Главен текст", name: "mainInfo" },
            { label: "Насоки", name: "directions" },
            { label: "Планинарење", name: "hiking" },
            { label: "Велосипедизам", name: "biking" },
            { label: "Приказна", name: "legend" },
            { label: "Место", name: "place" },
            { label: "Регион", name: "region" },
            { label: "Тип", name: "type" },
            { label: "Детали", name: "details" },
            { label: "Активности", name: "activities" },
          ].map(({ label, name }) => (
            <TextField
              key={name}
              label={label}
              name={name}
              value={editData[name]}
              onChange={handleEditChange}
              multiline={["details", "activities"].includes(name)}
              rows={["details", "activities"].includes(name) ? 3 : 1}
              required
              fullWidth
            />
          ))}

          <input
            type="file"
            name="images"
            multiple
            onChange={handleEditChange}
          />

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
