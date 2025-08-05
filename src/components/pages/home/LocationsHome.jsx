import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HorizontalList from "../../HorizontalList";
import PhotoCard from "../../ui/cards/PhotoCard";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import styles from "../styles";

const LocationsHome = ({ locations, visibleItems }) => {
  return (
    <>
      <Box sx={styles.locationsHome}>
        <Typography variant="h4">Необични локации</Typography>
        <SecondaryButton
          component={RouterLink}
          to="/locations"
          sx={styles.secondaryHome}
        >
          Види повеќе
        </SecondaryButton>
      </Box>
      <HorizontalList
        items={locations}
        visibleItems={visibleItems}
        cardType="photo"
        renderItem={(item) => <PhotoCard {...item} />}
      />
    </>
  );
};

export default LocationsHome;
