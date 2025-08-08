import {
  Box,
  TextField,
  Typography,
  Link,
  Stack,
  CircularProgress,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles, { loginFields } from "./styles";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import useLoginFormHandler from "../../hooks/useLoginFormHandler";

const fields = [
  { name: "email", label: "Електронска пошта", type: "email" },
  { name: "password", label: "Лозинка", type: "password" },
];

const LoginForm = ({ onSubmit, formData, setFormData }) => {
  const { errors, loading, handleChange, handleSubmit } = useLoginFormHandler({
    onSubmit,
    formData,
    setFormData,
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%", maxWidth: "400px" }}
    >
      <Stack>
        {fields.map(({ name, label, type }) => (
          <TextField
            key={name}
            label={label}
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            fullWidth
            // required
            disabled={loading}
            sx={loginFields(Boolean(errors[name]))}
            error={Boolean(errors[name])}
            helperText={errors[name] || " "}
          />
        ))}
        <Box sx={styles.rememberMe}>
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={!!formData.rememberMe}
                onChange={handleChange}
                color="white"
                sx={{ color: "white" }}
                disabled={loading}
              />
            }
            label={
              <Typography sx={{ color: "white", fontSize: { xs: 12, md: 15 } }}>
                Запамти ме
              </Typography>
            }
          />
          <Link
            href="/forgot-password"
            underline="hover"
            color="#ffffff"
            fontSize={{ xs: 12, md: 15 }}
          >
            Ја заборави лозинката?
          </Link>
        </Box>
        <PrimaryButton type="submit" sx={styles.submitLogin} disabled={loading}>
          {loading ? (
            <CircularProgress size={24} color="#ffffff" />
          ) : (
            "Најави се"
          )}
        </PrimaryButton>
        <Typography variant="body1" textAlign="center" color="white">
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
