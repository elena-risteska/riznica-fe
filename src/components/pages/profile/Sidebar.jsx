import { Box, Typography, Stack, Avatar } from "@mui/material";
const Sidebar = ({ firstName, lastName, city, bio }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: "30%",
        height: "100vh",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          right: 0,
          top: "0%",
          bottom: "8%",
          width: "2px",
          bgcolor: "grey.400",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Avatar
          alt={firstName}
          src="/path/to/image.jpg"
          sx={{ width: 64, height: 64 }}
        />

        <Stack spacing={0.5}>
          <Typography variant="h6">
            {firstName} {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {city}
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ maxWidth: 300 }}>
        <Typography variant="body2" lineHeight={2}>
          {bio}
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
