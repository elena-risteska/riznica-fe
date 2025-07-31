import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles, photoStyle } from "./styles";
import fallback from "../../../assets/images/image-fallback.svg";

const PhotoCard = ({ image, title, description, to, loading = false }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(to);

  return (
    <Card onClick={handleClick} role="button" sx={styles.photoCard}>
      {loading && (
        <Skeleton variant="rectangular" animation="wave" sx={styles.skeleton} />
      )}
      <CardMedia
        component="img"
        image={image || fallback}
        alt={title}
        sx={photoStyle(!loading)}
      />
      <CardContent>
        {!loading ? (
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
        ) : (
          <Skeleton variant="text" width="80%" height={28} />
        )}
        {!loading ? (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        ) : (
          <>
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="60%" />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
