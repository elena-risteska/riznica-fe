import { Box, Typography } from "@mui/material";
import { useState } from "react";
import LoginForm from "../../forms/LoginForm";
import styles from "./styles";

const LoginBlock = () => {
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
      />
    </Box>
  );
};
export default LoginBlock;
