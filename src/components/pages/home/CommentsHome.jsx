import { Box, Typography } from "@mui/material";
import HorizontalList from "../../HorizontalList";
import CommentCard from "../../ui/cards/CommentCard";

const CommentsHome = ({ comments, visibleItems, text = true }) => {
  return (
    <Box>
      {text && (
        <Typography variant="h5" px={{ xs: 1.5, sm: 7.5 }}>
          {text}
        </Typography>
      )}
      <HorizontalList
        items={comments}
        visibleItems={visibleItems}
        cardType="comment"
        renderItem={(item) => <CommentCard {...item} />}
      />
    </Box>
  );
};

export default CommentsHome;
