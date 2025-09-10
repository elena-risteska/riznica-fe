import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Sidebar from "../components/pages/profile/Sidebar";
import PhotoCard from "../components/ui/cards/PhotoCard";
import api from "../../api";

const Profile = () => {
  const [favorites, setFavorites] = useState([]);

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
          <Typography variant="h6" gutterBottom mb={4}>
            Посетени локации
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            {favorites.length > 0 ? (
              favorites.map((loc) => (
                <Box
                  key={loc._id}
                  component={RouterLink}
                  to={`/location/${loc.type}/${loc._id}`}
                  sx={{
                    textDecoration: "none",
                    width: 250,
                    flexShrink: 0,
                  }}
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
