import { useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import { Box, Typography } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
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
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }} width="50%"></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 4, md: 0 },
          backgroundColor: "info.main",
          borderRadius: "1000px 0 0 1000px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          mb={1}
          color="white"
        >
          Добредојде назад!
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          textAlign="center"
          mb={10}
          color="white"
        >
          Најави се за да продолжиш
        </Typography>
        <LoginForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
};
export default Login;
