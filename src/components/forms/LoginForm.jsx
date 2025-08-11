import {
  Box,
  TextField,
  Typography,
  Link,
  Stack,
  CircularProgress,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import styles, { loginFields } from "./styles";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import useLoginFormHandler from "../../hooks/useLoginFormHandler";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const fields = [
  {
    name: "email",
    label: "Електронска пошта",
    type: "email",
    icon: <EmailIcon sx={{ color: "white" }} />,
  },
  {
    name: "password",
    label: "Лозинка",
    type: "password",
    icon: <LockIcon sx={{ color: "white" }} />,
  },
];

const LoginForm = ({ onSubmit, formData, setFormData }) => {
  const { errors, loading, handleChange, handleSubmit } = useLoginFormHandler({
    onSubmit,
    formData,
    setFormData,
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%", maxWidth: "400px" }}
    >
      <Stack>
        {fields.map(({ name, label, type, icon }) => {
          const isPassword = name === "password";
          return (
            <TextField
              key={name}
              label={label}
              name={name}
              type={isPassword && showPassword ? "text" : type}
              value={formData[name]}
              onChange={handleChange}
              fullWidth
              // required
              disabled={loading}
              sx={loginFields(Boolean(errors[name]))}
              error={Boolean(errors[name])}
              helperText={errors[name] || " "}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ),
                ...(isPassword && {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        sx={{ color: "white" }}
                      >
                        {showPassword ? (
                          <Visibility sx={{ color: "white" }} />
                        ) : (
                          <VisibilityOff sx={{ color: "white" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }),
              }}
            />
          );
        })}
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
