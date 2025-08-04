import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HorizontalList from "../HorizontalList";
import PhotoCard from "../ui/cards/PhotoCard";
import SecondaryButton from "../ui/buttons/SecondaryButton";
import styles from "./styles";

const ActivitiesHome = ({ activities, visibleItems }) => {
  return (
    <Box my={10}>
      <Box sx={styles.locationsHome}>
        <Typography variant="h4">Адреналински активности</Typography>
        <SecondaryButton
          component={RouterLink}
          to="/activities"
          sx={styles.secondaryHome}
        >
          Види повеќе
        </SecondaryButton>
      </Box>
      <HorizontalList
        items={activities}
        visibleItems={visibleItems}
        cardType="photo"
        renderItem={(item) => <PhotoCard {...item} />}
      />
    </Box>
  );
};

export default ActivitiesHome;
