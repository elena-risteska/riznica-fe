import { Box } from "@mui/material";
import DefaultLayout from "../layouts/DefaultLayout";
import Sidebar from "../components/pages/profile/Sidebar";

const Profile = () => {
  return (
    <DefaultLayout>
      <Box
        sx={{ display: "flex", flexDirection: "row", width: "100%", px: 15 }}
      >
        <Sidebar
          firstName="Елена"
          lastName="Ристеска"
          city="Прилеп, Македонија"
          bio="Сакам да шетам, да истражувам, да фотографирам, да јадам, јас да се сликам, да планинарам, да возам точак."
        />
      </Box>
    </DefaultLayout>
  );
};

export default Profile;
