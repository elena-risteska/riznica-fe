import {
  Box,
  Typography,
  TextField,
  Link,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import styles from "./styles";

const ForgotPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Внеси електронска пошта");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Невалидна електронска пошта");
      return;
    }
    setError("");
    setLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(email);
        navigate("/recover-account");
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Ја заборави лозинката?
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={6}>
        Внеси електронска пошта на која ќе биде испратен код
      </Typography>
      <TextField
        label="Електронска пошта"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error}
        helperText={error || " "}
        fullWidth
        sx={styles.forgotPasswordField}
      />
      <Stack direction="column" spacing={2} mt={3}>
        <PrimaryButton
          type="submit"
          sx={{ borderRadius: 4 }}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Испрати код"
          )}
        </PrimaryButton>
        <Typography variant="body2" textAlign="center" mt={1} color="info.main">
          Ја знаеш лозинката?{"  "}
          <Link href="/login" underline="always" color="info.main">
            Најави се
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default ForgotPasswordForm;
