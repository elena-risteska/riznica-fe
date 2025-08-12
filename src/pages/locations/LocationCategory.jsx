import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import HeaderLocations from "../../components/pages/locations/HeaderLocations";
import DefaultLayout from "../../layouts/DefaultLayout";
import { translations, subtitles } from "../../config/translations";

const LocationCategory = () => {
  const { category } = useParams();
  const title = translations[category] || category;
  const subtitle = subtitles[category] || category;

  return (
    <DefaultLayout breadcrumbs={true}>
      <HeaderLocations title={title} subtitle={subtitle} reverse={true} />
    </DefaultLayout>
  );
};

export default LocationCategory;
