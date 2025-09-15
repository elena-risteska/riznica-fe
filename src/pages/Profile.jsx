import {
  Box,
  Typography,
  Modal,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
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
  const [activeRequests, setActiveRequests] = useState([]);
  const [completedRequests, setCompletedRequests] = useState([]);
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
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { user } = useContext(UserContext);

  // Fetch favorites (user)
  useEffect(() => {
    if (user?.role === "user") {
      const fetchFavorites = async () => {
        try {
          const res = await api.get("/users/favorites");
          setFavorites(res.data);
        } catch (err) {
          console.error("Failed to load favorites:", err);
        }
      };
      fetchFavorites();
    }
  }, [user]);

  // Fetch requests (admin)
  useEffect(() => {
    if (user?.role === "admin") {
      const fetchRequests = async () => {
        try {
          const res = await api.get("/requests");
          setActiveRequests(res.data);
        } catch (err) {
          console.error("Failed to load requests:", err);
        }
      };
      fetchRequests();
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLocation((prev) => ({ ...prev, [name]: value }));
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

      await api.post("/locations", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setOpenModal(false);
      setSnackbar({
        open: true,
        message: "Локацијата е успешно додадена!",
        severity: "success",
      });

      // reset form
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
        region: "",
      });
    } catch (err) {
      console.error("Failed to add location:", err);
      setSnackbar({
        open: true,
        message: "Грешка при додавање на локација.",
        severity: "error",
      });
    }
  };

  const handleMarkSeen = (reqId) => {
    const request = activeRequests.find((r) => r._id === reqId);
    if (request) {
      setActiveRequests(activeRequests.filter((r) => r._id !== reqId));
      setCompletedRequests([request, ...completedRequests]);
      setSnackbar({
        open: true,
        message: "Барањето е означено како видено.",
        severity: "success",
      });
    }
  };

  const handleDeleteRequest = async (reqId, isCompleted = false) => {
    try {
      await api.delete(`/requests/${reqId}`);
      if (isCompleted) {
        setCompletedRequests(completedRequests.filter((r) => r._id !== reqId));
      } else {
        setActiveRequests(activeRequests.filter((r) => r._id !== reqId));
      }
      setSnackbar({
        open: true,
        message: "Барањето е избришано.",
        severity: "success",
      });
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: "Грешка при бришење на барањето.",
        severity: "error",
      });
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
            gap: 4,
          }}
        >
          {/* ADD LOCATION BUTTON */}
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

          {/* FAVORITES (User) */}
          {user?.role === "user" && (
            <>
              <Typography variant="h6" gutterBottom>
                Посетени локации
              </Typography>
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
            </>
          )}

          {/* REQUESTS (Admin) */}
          {user?.role === "admin" && (
            <>
              <Typography variant="h6">Активни барања</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {activeRequests.length > 0 ? (
                  activeRequests.map((req) => (
                    <Box
                      key={req._id}
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 2,
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1">{req.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {req.email}
                        </Typography>
                        <Typography variant="body1">{req.message}</Typography>
                      </Box>
                      <Box display="flex" gap={1}>
                        <Button
                          variant="outlined"
                          color="success"
                          onClick={() => handleMarkSeen(req._id)}
                        >
                          Видено
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => handleDeleteRequest(req._id)}
                        >
                          Избриши
                        </Button>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography color="text.secondary">
                    Нема активни барања.
                  </Typography>
                )}
              </Box>

              <Typography variant="h6" mt={4}>
                Завршени барања
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {completedRequests.length > 0 ? (
                  completedRequests.map((req) => (
                    <Box
                      key={req._id}
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 2,
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1">{req.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {req.email}
                        </Typography>
                        <Typography variant="body1">{req.message}</Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDeleteRequest(req._id, true)}
                      >
                        Избриши
                      </Button>
                    </Box>
                  ))
                ) : (
                  <Typography color="text.secondary">
                    Нема завршени барања.
                  </Typography>
                )}
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* ADD LOCATION MODAL */}
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
            "title",
            "description",
            "mainInfo",
            "directions",
            "hiking",
            "biking",
            "legend",
            "place",
            "type",
            "region",
          ].map((name) => (
            <TextField
              key={name}
              label={name}
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

      {/* SNACKBAR */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </DefaultLayout>
  );
};

export default Profile;
