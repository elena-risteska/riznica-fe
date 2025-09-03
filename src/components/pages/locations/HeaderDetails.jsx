import { Box, Typography, Chip } from "@mui/material";
import styles from "./styles";

const HeaderDetails = ({
  title,
  location,
  details,
  coords,
  activities,
  mainInfo,
}) => {
  return (
    <Box sx={styles.detailsBox}>
      <Box sx={styles.textBox}>
        <Typography variant="body1" lineHeight={2}>
          {mainInfo}
        </Typography>
      </Box>
      <Box sx={styles.yellowBox}>
        <Typography variant="h4" mb={4}>
          {title}
        </Typography>
        <Typography variant="body1" mb={1} fontWeight={600}>
          Местоположба: {location}
        </Typography>
        {coords?.length === 2 && (
          <Typography variant="body1" mb={1} fontWeight={600}>
            Координати: {coords[0]}, {coords[1]}
          </Typography>
        )}
        {details?.map((item, index) => (
          <Typography
            key={index}
            variant="body1"
            mb={index !== details.length - 1 ? 1 : 4}
            fontWeight={600}
          >
            {item}
          </Typography>
        ))}
        <Box display="flex" flexDirection="row" gap={2}>
          {activities?.map((item, index) => (
            <Chip
              key={index}
              label={item}
              color="primary"
              variant="filled"
              sx={{ fontWeight: 600, color: "white", minWidth: 150 }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderDetails;
