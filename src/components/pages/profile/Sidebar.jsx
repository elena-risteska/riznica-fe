import { Box, Typography, Stack, Avatar, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoForm from "../../forms/InfoForm";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import api from "../../../../api";

const Sidebar = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    bio: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/profile");
        setUserData(res.data);
        setFormData({
          firstName: res.data.firstName || "",
          lastName: res.data.lastName || "",
          username: res.data.username || "",
          bio: res.data.bio || "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSubmit = async (data) => {
    try {
      const res = await api.put("/users/profile", data);
      console.log("Profile updated:", res.data);
      setUserData(res.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleDelete = async () => {
    if (
      !window.confirm("Дали сте сигурни дека сакате да го избришете профилот?")
    )
      return;
    try {
      await api.delete("/users/profile");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  if (!userData) {
    return <Typography>Loading profile...</Typography>;
  }

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
          alt={userData.firstName}
          src={userData.profilePic || "/path/to/image.jpg"}
          sx={{ width: 64, height: 64 }}
        />

        <Stack spacing={0.5}>
          <Typography variant="h6">
            {userData.firstName} {userData.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData.username}
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ maxWidth: 300 }}>
        <Typography variant="body2" lineHeight={2}>
          {userData.bio}
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
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        sx={{ backgroundColor: "primary.main", width: "90%", borderRadius: 4 }}
      >
        Одјави се
      </PrimaryButton>

      <PrimaryButton
        onClick={handleDelete}
        sx={{ backgroundColor: "primary.main", width: "90%", borderRadius: 4 }}
      >
        Избриши го профилот
      </PrimaryButton>
    </Box>
  );
};

export default Sidebar;
