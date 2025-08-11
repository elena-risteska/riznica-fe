import { Box } from "@mui/material";
import { useState } from "react";
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
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
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
