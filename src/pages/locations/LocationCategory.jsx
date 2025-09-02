import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { translations, subtitles } from "../../config/translations";
import HeaderLocations from "../../components/pages/locations/HeaderLocations";
import DefaultLayout from "../../layouts/DefaultLayout";
import PhotoCard from "../../components/ui/cards/PhotoCard";
import styles from "../styles";
import api from "../../../api";

const LocationCategory = () => {
  const [locations, setLocations] = useState([]);
  const { type } = useParams();
  const title = translations[type] || type;
  const subtitle = subtitles[type] || type;

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await api.get("/locations");

        const filtered = response.data
          .filter((loc) => loc.type === type)
          .map((loc) => ({
            ...loc,
            to: `/location/${loc.type}/${loc._id}`,
          }));

        setLocations(filtered);
      } catch (err) {
        console.error("Failed to load locations:", err);
      }
    };

    fetchLocations();
  }, [type]);

  return (
    <DefaultLayout breadcrumbs={true}>
      <HeaderLocations title={title} subtitle={subtitle} reverse={true} />
      <Box sx={styles.cardsGrid}>
        <Grid container spacing={6} justifyContent="center">
          {locations.map((item) => (
            <Grid
              key={item._id}
              item
              xs={12}
              sm={6}
              md={3}
              lg={2}
              sx={{ maxWidth: 300 }}
            >
              <PhotoCard
                title={item.title}
                description={item.description}
                to={item.to}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default LocationCategory;
