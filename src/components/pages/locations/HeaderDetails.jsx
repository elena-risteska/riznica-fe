import { Box, Typography } from "@mui/material";
import styles from "./styles";

const HeaderDetails = ({
  type,
  title,
  location,
  mnv,
  height,
  river,
  mountain,
  coords,
  mainInfo,
}) => {
  const detailsList = [
    { label: "Местоположба", value: location },
    { label: "Надморска височина", value: mnv },
    { label: "Висина на водопадот", value: height },
    { label: "Река", value: river },
    { label: "Планина", value: mountain },
    { label: "Координати", value: coords },
  ];
  return (
    <Box sx={styles.detailsBox}>
      <Box sx={styles.yellowBox}>
        <Typography variant="h4" mb={4}>
          {title}
        </Typography>
        {detailsList.map((item, index) => (
          <Typography
            key={index}
            variant="body1"
            mb={index !== detailsList.length - 1 ? 1 : 0}
            fontWeight={600}
          >
            {item.label}: {item.value}
          </Typography>
        ))}
      </Box>
      <Box sx={styles.textBox}>
        <Typography variant="body1" lineHeight={2} align="right">
          {mainInfo}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderDetails;
