import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { styles } from "./styles";
import fallback from "../../../../public/image-fallback.svg";

const PhotoCard = ({ image, title, description, to }) => {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleClick = () => navigate(to);

  return (
    <Card onClick={handleClick} role="button" sx={styles.photoCard}>
      {!imgLoaded && (
        <Skeleton
          variant="rectangular"
          height="200"
          width="100%"
          animation="wave"
        />
      )}
      <CardMedia
        component="img"
        height="200"
        image={image ? image : fallback}
        alt={title}
        onLoad={() => setImgLoaded(true)}
        sx={{
          objectFit: "cover",
          display: imgLoaded ? "block" : "none",
        }}
      />
      <CardContent>
        {imgLoaded ? (
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
        ) : (
          <Skeleton variant="text" width="80%" height={28} />
        )}
        {imgLoaded ? (
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
