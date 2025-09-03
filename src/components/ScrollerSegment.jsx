import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "./styles";
import HorizontalList from "./HorizontalList";
import PhotoCard from "./ui/cards/PhotoCard";
import SecondaryButton from "./ui/buttons/SecondaryButton";

const ScrollerSegment = ({ items, visibleItems, title, to, button = true }) => {
  return (
    <Box my={{ xs: 5, md: 10 }}>
      <Box sx={styles.scroller}>
        <Typography
          variant="h4"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          {title}
        </Typography>
        {button && (
          <SecondaryButton component={RouterLink} to={to} sx={styles.secondary}>
            Види повеќе
          </SecondaryButton>
        )}
      </Box>
      <HorizontalList
        items={items}
        visibleItems={visibleItems}
        cardType="photo"
        renderItem={(item) => <PhotoCard {...item} />}
      />
    </Box>
  );
};

export default ScrollerSegment;
