import {
  Box,
  TextField,
  Typography,
  Link,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useRegisterFormHandler } from "../../hooks/useRegisterFormHandler";
import { registerFormFields } from "../../config/registerFormFields";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import styles, { registerFields } from "./styles";

const RegisterForm = ({ onSubmit, formData, setFormData }) => {
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
        {registerFormFields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
            error={!!errors[field.name]}
            helperText={errors[field.name] || " "}
            fullWidth
            sx={registerFields(!!errors[field.name])}
          />
        ))}
      </Stack>

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
