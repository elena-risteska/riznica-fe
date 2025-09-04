import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Sidebar from "../components/pages/profile/Sidebar";
import PhotoCard from "../components/ui/cards/PhotoCard";
import HorizontalList from "../components/HorizontalList";
import CommentCard from "../components/ui/cards/CommentCard";

const Profile = () => {
  const [saved, setSaved] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setSaved(data.locations);
        setComments(data.comments);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
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
        <Sidebar
          firstName="Елена"
          lastName="Ристеска"
          username="Прилеп, Македонија"
          bio="Сакам да шетам, да истражувам, да фотографирам, да јадам, јас да се сликам, да планинарам, да возам точак."
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 8,
            height: "auto",
            width: "70%",
          }}
        >
          <Box>
            <Typography variant="h6">Зачувани</Typography>
            <HorizontalList
              items={saved}
              renderItem={(item) => <PhotoCard {...item} />}
              visibleItems={2}
              cardType="photo"
            />
          </Box>
          <Box>
            <Typography variant="h6">Посетени локации</Typography>
            <HorizontalList
              items={saved}
              renderItem={(item) => <PhotoCard {...item} />}
              visibleItems={3}
              cardType="photo"
            />
          </Box>
          <Box>
            <Typography variant="h6">Оставени коментари</Typography>
            <HorizontalList
              items={comments}
              visibleItems={2}
              cardType="comment"
              renderItem={(item) => <CommentCard {...item} />}
            />
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Profile;
