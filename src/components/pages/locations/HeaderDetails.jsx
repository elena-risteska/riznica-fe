import { Box, Typography } from "@mui/material";

const HeaderDetails = ({ title, location, mnv, height, river }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFE991",
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h5" mb={4}>
          {title}
        </Typography>
        <Typography variant="body1" mb={1}>
          Местоположба: {location}
        </Typography>
        <Typography variant="body1" mb={1}>
          Надморска височина: {mnv}
        </Typography>
        <Typography variant="body1" mb={1}>
          Висина на водопадот: {height}
        </Typography>
        <Typography variant="body1" mb={1}>
          Река: {river}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderDetails;
