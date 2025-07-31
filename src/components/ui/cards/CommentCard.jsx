import { Avatar, Box, Paper, Skeleton, Typography } from "@mui/material";
import { commentStyle, avatarStyle, styles } from "./styles";
import { useCommentNavigation } from "../../../hooks/useCommentNavigation";
import avatar from "../../../assets/images/avatar-fallback.svg";

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
  const { onCardClick, onUserClick } = useCommentNavigation(
    loading,
    post,
    user
  );
  return (
    <Paper elevation={3} onClick={onCardClick} sx={commentStyle(loading)}>
      <Box sx={avatarStyle(loading)} onClick={onUserClick}>
        {loading ? (
          <Skeleton variant="circular" width={56} height={56} />
        ) : (
          <Avatar
            src={photo || avatar}
            alt={username}
            sx={{ width: 56, height: 56 }}
          />
        )}
      </Box>
      <Box flex={1}>
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
              onClick={onUserClick}
              sx={styles.user}
            >
              {firstName} {lastName}
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={1}>
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
