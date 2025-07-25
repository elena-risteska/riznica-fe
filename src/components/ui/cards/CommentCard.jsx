import { Avatar, Box, Paper, Skeleton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import avatar from "../../../../public/avatar-fallback.png";

const CommentCard = ({
  photo,
  firstName,
  lastName,
  username,
  comment,
  loading = false,
  post,
  user,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (!loading && post) {
      navigate(post);
    }
  };

  const handleUserClick = (e) => {
    e.stopPropagation();
    if (!loading && user) {
      navigate(user);
    }
  };

  return (
    <Paper
      elevation={3}
      onClick={handleCardClick}
      sx={{
        border: 3,
        borderColor: "info.main",
        borderRadius: 3,
        p: 2,
        my: 1,
        display: "flex",
        flex: 1,
        height: "100%",
        gap: 2,
        alignItems: "flex-start",
        cursor: loading ? "default" : "pointer",
        userSelect: "none",
        transition: "all 0.2s ease-in-out",
        transform: loading ? "none" : "scale(1)",
        "&:hover": loading
          ? {}
          : {
              boxShadow: 6,
              backgroundColor: "info.lighter",
              transform: "scale(1.01)",
            },
      }}
    >
      <Box
        sx={{ minWidth: 56, cursor: loading ? "default" : "pointer" }}
        onClick={handleUserClick}
      >
        {loading ? (
          <Skeleton variant="circular" width={56} height={56} />
        ) : (
          <Avatar
            src={photo ? photo : avatar}
            alt={username}
            sx={{ width: 56, height: 56 }}
          />
        )}
      </Box>

      <Box sx={{ flex: 1 }}>
        {loading ? (
          <>
            <Skeleton width="30%" height={24} sx={{ mb: 1 }} />
            <Skeleton width="20%" height={20} sx={{ mb: 1 }} />
            <Skeleton width="90%" height={18} />
          </>
        ) : (
          <>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              onClick={handleUserClick}
              sx={{ cursor: "pointer", display: "inline-block" }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              @{username}
            </Typography>
            <Typography variant="body1">{comment}</Typography>
          </>
        )}
      </Box>
    </Paper>
  );
};

export default CommentCard;
