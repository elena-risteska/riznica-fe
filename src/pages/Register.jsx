import { Box } from "@mui/material";
import { useState } from "react";
import api from "../../api";
import styles from "./styles";
import RegisterForm from "../components/forms/RegisterForm";
import BackButton from "../components/ui/buttons/BackButton";

const Register = () => {
  const [apiError, setApiError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (data) => {
    try {
      setApiError("");
      const response = await api.post("/auth/register", data);
      console.log("Registered successfully:", response.data);
      localStorage.setItem("token", response.data.token);
      return { success: true };
    } catch (error) {
      let errMsg = "Registration failed. Try again.";

      if (error.response?.data) {
        if (typeof error.response.data === "string") {
          errMsg = error.response.data;
        } else if (typeof error.response.data.message === "string") {
          errMsg = error.response.data.message;
        } else {
          errMsg = JSON.stringify(error.response.data); // fallback to string
        }
      }
      setApiError(errMsg);
      return { success: false };
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
            apiError={apiError}
          />
        </Box>
      </Box>
    </>
  );
};
export default Register;
