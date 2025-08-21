import { Box, Typography, Stack, Avatar, Divider } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoForm from "../../forms/InfoForm";
import PrimaryButton from "../../ui/buttons/PrimaryButton";

const Sidebar = ({ firstName, lastName, city, bio }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    city: "",
    bio: "",
  });

  const handleSubmit = async (data) => {
    try {
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "30%",
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
      <Divider sx={{ mb: 2, mr: 7 }} />
      <InfoForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
      <Divider sx={{ mr: 7 }} />
      <PrimaryButton
        onClick={() => navigate("/login")}
        sx={{ backgroundColor: "primary.main", width: "90%", borderRadius: 4 }}
      >
        Одјави се
      </PrimaryButton>
      <PrimaryButton
        onClick={() => navigate("/")}
        sx={{ backgroundColor: "primary.main", width: "90%", borderRadius: 4 }}
      >
        Избриши го профилот
      </PrimaryButton>
    </Box>
  );
};

export default Sidebar;
