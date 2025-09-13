import { useNavigate } from "react-router-dom";

export function useCommentNavigation(loading, post, user) {
  const navigate = useNavigate();

  const onCardClick = () => {
    if (!loading && post && post.location) {
      navigate(`/location/${post.location.type}/${post.location._id}`);
    }
  };

  const onUserClick = (e) => {
    e.stopPropagation();
    if (!loading && user) {
      navigate(`/profile/${user._id}`);
    }
  };

  return { onCardClick, onUserClick };
}
