import { Box, Typography } from "@mui/material";
import photo from "../../../assets/images/lokva1.jpg";
const Directions = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        alt="photo"
        src={photo}
        sx={{ width: 400, height: "auto", borderRadius: 8 }}
      />
      <Box
        sx={{
          display: "flex",
          width: "60%",
          textAlign: "justify",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" mb={4} align="right">
          Како да стигнеш дотаму?
        </Typography>
        <Typography variant="body1" lineHeight={2}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Directions;
