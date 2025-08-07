import { Box, TextField, Typography, Link, Stack } from "@mui/material";
import { useState } from "react";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import styles from "./styles";
import { validateForm } from "../../utils/validateForm";

const LoginForm = ({ onSubmit, formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const validationErrors = validateForm({ email, password });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%", maxWidth: "400px" }}
    >
      <Stack spacing={2}>
        <TextField
          label="Електронска пошта"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={styles.loginFields}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="Лозинка"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          sx={styles.loginFields}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
        <Box textAlign="right" pb={4}>
          <Link href="/forgot-password" underline="hover" color="#ffffff">
            Ја заборави лозинката?
          </Link>
        </Box>
        <PrimaryButton type="submit" sx={styles.submitLogin}>
          Најави се
        </PrimaryButton>
        <Typography variant="body2" textAlign="center" color="white">
          Не си дел од ризницата?
          <Link href="/register" underline="always" color="#ffffff" ml={1}>
            Регистрирај се
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default LoginForm;
