import {
  Box,
  TextField,
  Typography,
  Link,
  Stack,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useRegisterFormHandler } from "../../hooks/useRegisterFormHandler";
import { registerFormFields } from "../../config/registerFormFields";
import { useState } from "react";
import styles, { registerFields } from "./styles";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegisterForm = ({ onSubmit, formData, setFormData, apiError }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { errors, loading, handleChange, handleSubmit } =
    useRegisterFormHandler(formData, setFormData, onSubmit);

  return (
    <Box component="form" onSubmit={handleSubmit} maxWidth="400px">
      <Typography variant="h4" gutterBottom sx={styles.header}>
        Добредојде
      </Typography>
      <Typography variant="body2" color="white" textAlign="center" mb={4}>
        Внеси ги податоците за да се регистрираш
      </Typography>
      <Stack>
        {registerFormFields.map((field) => {
          const isPassword = field.name === "password";
          return (
            <TextField
              key={field.name}
              label={field.label}
              name={field.name}
              type={
                isPassword ? (showPassword ? "text" : "password") : field.type
              }
              value={formData[field.name]}
              onChange={handleChange}
              error={!!errors[field.name]}
              helperText={errors[field.name] || " "}
              fullWidth
              sx={registerFields(!!errors[field.name])}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{field.icon}</InputAdornment>
                ),
                endAdornment: isPassword && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? (
                        <Visibility sx={{ color: "white" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "white" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          );
        })}
      </Stack>
      {apiError && (
        <Typography color="white" sx={{ textAlign: "center" }}>
          {apiError}
        </Typography>
      )}
      <PrimaryButton
        type="submit"
        sx={styles.submitRegister}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Регистрирај се"
        )}
      </PrimaryButton>

      <Typography variant="body2" textAlign="center" mt={1} color="white">
        Веќе си дел од ризницата?{" "}
        <Link href="/login" underline="always" color="#ffffff" fontWeight={600}>
          Најави се
        </Link>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
