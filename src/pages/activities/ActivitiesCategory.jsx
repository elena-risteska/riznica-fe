import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { translations, subtitles } from "../../config/translations";
import HeaderLocations from "../../components/pages/locations/HeaderLocations";
import DefaultLayout from "../../layouts/DefaultLayout";
import PhotoCard from "../../components/ui/cards/PhotoCard";
import styles from "../styles";

const ActivitiesCategory = () => {
  const [hiking, setHiking] = useState([]);
  const { category } = useParams();
  const title = translations[category] || category;
  const subtitle = subtitles[category] || category;

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setHiking(data.locations);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
  }, []);

  return (
    <DefaultLayout breadcrumbs={true}>
      <HeaderLocations title={title} subtitle={subtitle} reverse={false} />
      <Box sx={styles.cardsGrid}>
        <Grid container spacing={6} justifyContent="center">
          {hiking.map((item) => (
            <Grid
              key={item.id}
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

export default ActivitiesCategory;
