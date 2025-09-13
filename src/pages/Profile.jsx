import { Box, Typography, Modal, TextField } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Sidebar from "../components/pages/profile/Sidebar";
import PhotoCard from "../components/ui/cards/PhotoCard";
import api from "../../api";
import { UserContext } from "../UserContext";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";

const Profile = () => {
  const [favorites, setFavorites] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newLocation, setNewLocation] = useState({
    title: "",
    description: "",
    mainInfo: "",
    directions: "",
    hiking: "",
    biking: "",
    legend: "",
    images: [],
    place: "",
    details: [],
    activities: [],
    type: "",
    region: "",
  });

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await api.get("/users/favorites");
        setFavorites(res.data);
      } catch (err) {
        console.error("Failed to load favorites:", err);
      }
    };
    fetchFavorites();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLocation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, field) => {
    const value = e.target.value.split(",").map((v) => v.trim());
    setNewLocation((prev) => ({ ...prev, [field]: value }));
  };

  const handleImagesChange = (e) => {
    setNewLocation((prev) => ({ ...prev, images: e.target.files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(newLocation).forEach((key) => {
        if (key === "images") {
          for (let i = 0; i < newLocation.images.length; i++) {
            formData.append("images[]", newLocation.images[i]);
          }
        } else if (["details", "activities"].includes(key)) {
          formData.append(key, JSON.stringify(newLocation[key] || []));
        } else {
          formData.append(key, newLocation[key] || "");
        }
      });

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      await api.post("/locations", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setOpenModal(false);
      setNewLocation({
        title: "",
        description: "",
        mainInfo: "",
        directions: "",
        hiking: "",
        biking: "",
        legend: "",
        images: [],
        place: "",
        details: [],
        activities: [],
        type: "",
      });
    } catch (err) {
      console.error("Failed to add location:", err);
    }
  };

  return (
    <DefaultLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          px: 8,
          mb: 3,
        }}
      >
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 8,
            width: "70%",
            gap: 2,
          }}
        >
          {user?.role === "admin" && (
            <PrimaryButton
              sx={{
                mb: 3,
                width: 200,
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: 3,
              }}
              onClick={() => setOpenModal(true)}
            >
              Додај нова локација
            </PrimaryButton>
          )}

          <Typography variant="h6" gutterBottom mb={2}>
            Посетени локации
          </Typography>

          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <Box
              component="form"
              onSubmit={handleSubmit}
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
                Нова Локација
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
                { label: "Тип", name: "type" },
              ].map(({ label, name }) => (
                <TextField
                  key={name}
                  label={label}
                  name={name}
                  value={newLocation[name]}
                  onChange={handleChange}
                  required
                />
              ))}

              <TextField
                label="Детали (одделени со запирка)"
                value={newLocation.details.join(", ")}
                onChange={(e) => handleArrayChange(e, "details")}
              />
              <TextField
                label="Активности (одделени со запирка)"
                value={newLocation.activities.join(", ")}
                onChange={(e) => handleArrayChange(e, "activities")}
              />
              <TextField
                label="Регион"
                name="region"
                value={newLocation.region}
                onChange={handleChange}
                required
              />

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImagesChange}
              />

              <PrimaryButton
                type="submit"
                sx={{ backgroundColor: "primary.main", color: "white", mt: 2 }}
              >
                Додај
              </PrimaryButton>
            </Box>
          </Modal>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {favorites.length > 0 ? (
              favorites.map((loc) => (
                <Box
                  key={loc._id}
                  component={RouterLink}
                  to={`/location/${loc.type}/${loc._id}`}
                  sx={{ textDecoration: "none", width: 250, flexShrink: 0 }}
                >
                  <PhotoCard {...loc} />
                </Box>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                Немате додадено омилени локации.
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Profile;
