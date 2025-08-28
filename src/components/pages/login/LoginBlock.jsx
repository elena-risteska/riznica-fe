import { Box, Typography } from "@mui/material";
import { useState } from "react";
import LoginForm from "../../forms/LoginForm";
import styles from "./styles";
import api from "../../../../api";

const LoginBlock = () => {
  const [apiError, setApiError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = async (data) => {
    try {
      setApiError("");
      const response = await api.post("/auth/login", data);

      console.log("Logged in successfully:", response.data);

      localStorage.setItem("token", response.data.token);

      return { success: true };
    } catch (error) {
      let errMsg = "Login failed. Try again.";

      if (error.response?.data) {
        if (typeof error.response.data === "string") {
          errMsg = error.response.data;
        } else if (typeof error.response.data.message === "string") {
          errMsg = error.response.data.message;
        } else {
          errMsg = JSON.stringify(error.response.data);
        }
      }

      setApiError(errMsg);
      return { success: false };
    }
  };
  return (
    <Box sx={styles.formBox}>
      <Typography sx={styles.heading} variant="h4" gutterBottom>
        Добредојде назад!
      </Typography>
      <Typography variant="body2" gutterBottom sx={styles.text}>
        Најави се за да продолжиш
      </Typography>
      <LoginForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        apiError={apiError}
      />
    </Box>
  );
};
export default LoginBlock;
