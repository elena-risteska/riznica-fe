import { Box, Typography } from "@mui/material";
import HorizontalList from "../HorizontalList";
import CommentCard from "../ui/cards/CommentCard";

const CommentsHome = ({ comments, visibleItems }) => {
  return (
    <Box>
      <Typography variant="h5" px={{ xs: 1.5, sm: 7.5 }}>
        Сподели го и твоето искуство
      </Typography>
      <HorizontalList
        items={comments}
        visibleItems={3}
        cardType="comment"
        renderItem={(item) => <CommentCard {...item} />}
      />
    </Box>
  );
};

export default CommentsHome;
