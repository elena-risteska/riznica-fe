import { Box, Typography } from "@mui/material";
import styles from "./styles";

const HeaderDetails = ({
  title,
  length,
  mnv,
  hard,
  time,
  start,
  elevation,
  mountain,
  mainInfo,
  coords,
}) => {
  const detailsList = [
    { label: "Координати", value: coords },
    { label: "Планина", value: mountain },
    { label: "Надморска височинa", value: mnv },
    { label: "Висинска разлика", value: elevation },
    { label: "Почетна точка", value: start },
    { label: "Должина на патека во правец", value: length },
    { label: "Време за искачување", value: time },
    { label: "Тежина на патека", value: hard },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        px: 8,
        gap: 6,
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", width: "50%" }}>
        <Typography variant="body1" lineHeight={2}>
          {mainInfo}
        </Typography>
      </Box>
      <Box sx={styles.redBox}>
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
    </Box>
  );
};

export default HeaderDetails;
