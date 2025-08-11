import {
  Box,
  Typography,
  TextField,
  Link,
  Stack,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/validateForm";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import styles from "./styles";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RecoverAccountForm = ({ formData, setFormData, onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(formData);
        navigate("/");
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Пристигна код?
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={6} align="center">
        Внеси го кодот кој го доби и напиши нова лозинка
      </Typography>
      <Stack direction="column" spacing={2}>
        <TextField
          name="code"
          label="Код"
          type="text"
          value={formData.code}
          onChange={handleChange}
          error={!!errors.code}
          helperText={errors.code || " "}
          fullWidth
          sx={styles.forgotPasswordField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon color="info" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="password"
          label="Нова лозинка"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password || " "}
          fullWidth
          sx={styles.forgotPasswordField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="info" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                  color="info"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="column" spacing={2} mt={3}>
        <PrimaryButton
          type="submit"
          sx={{ borderRadius: 4 }}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Промени лозинка"
          )}
        </PrimaryButton>
        <Typography variant="body2" textAlign="center" mt={1} color="info.main">
          Не доби код?{"  "}
          <Link href="/forgot-password" underline="always" color="info.main">
            Испрати повторно
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default RecoverAccountForm;
