import { Box, Typography } from "@mui/material";
import DefaultLayout from "../layouts/DefaultLayout";
import Sidebar from "../components/pages/profile/Sidebar";
import Card from "../components/ui/cards/PhotoCard";

const Profile = () => {
  return (
    <DefaultLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          px: 15,
          mb: 3,
        }}
      >
        <Sidebar
          firstName="Елена"
          lastName="Ристеска"
          city="Прилеп, Македонија"
          bio="Сакам да шетам, да истражувам, да фотографирам, да јадам, јас да се сликам, да планинарам, да возам точак."
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 8,
            height: "auto",
          }}
        >
          <Typography variant="h6" mb={4}>
            Посетени места
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Card
              title="Брнички водопад"
              description="Неверојатен водопад, има тон - нема слика"
              to="/locations/waterfalls/brnicki-vodopad"
            />
            <Card
              title="Брнички водопад"
              description="Неверојатен водопад, има тон - нема слика"
              to="/locations/waterfalls/brnicki-vodopad"
            />
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Profile;
