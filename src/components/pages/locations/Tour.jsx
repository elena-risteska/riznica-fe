import { Box, Typography } from "@mui/material";
import photo1 from "../../../assets/images/lokva3.jpg";
import photo2 from "../../../assets/images/lokva2.jpg";

const Tour = ({ text1, text2 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" align="center">
          Планинарска тура
        </Typography>
        <Box
          component="img"
          alt="photo"
          src={photo1}
          sx={{ width: 500, height: "auto", borderRadius: 8, my: 6 }}
        />
        <Typography variant="body1" align="justify" lineHeight={2}>
          {text1}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" align="center">
          Велосипедска тура
        </Typography>
        <Box
          component="img"
          alt="photo"
          src={photo2}
          sx={{ width: 500, height: "auto", borderRadius: 8, my: 6 }}
        />
        <Typography variant="body1" align="justify" lineHeight={2}>
          {text2}
        </Typography>
      </Box>
    </Box>
  );
};

export default Tour;
