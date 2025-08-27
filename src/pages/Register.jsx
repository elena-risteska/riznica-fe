import { Box } from "@mui/material";
import { useState } from "react";
import api from "../../api";
import styles from "./styles";
import RegisterForm from "../components/forms/RegisterForm";
import BackButton from "../components/ui/buttons/BackButton";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (data) => {
    try {
      const response = await api.post("/auth/register", data);
      console.log("Registered successfully:", response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <BackButton />
      <Box sx={styles.registerLayout}>
        <Box sx={styles.circle}>
          <RegisterForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        </Box>
      </Box>
    </>
  );
};
export default Register;
