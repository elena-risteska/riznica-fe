import { useNavigate } from "react-router-dom";

export function useCommentNavigation(loading, post, user) {
  const navigate = useNavigate();

  const onCardClick = () => {
    if (!loading && post) navigate(post);
  };

  const onUserClick = (e) => {
    e.stopPropagation();
    if (!loading && user) navigate(user);
  };

  return { onCardClick, onUserClick };
}
