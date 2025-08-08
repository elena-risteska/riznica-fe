import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { validateForm } from "../../utils/validateForm";
import { useContactFormHandler } from "../../hooks/useContactFormHandler";
import contactFormFields from "../../config/contactFormFields";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import styles from "./styles";

const ContactUsForm = ({ formData, setFormData, onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { handleChange, handleSubmit, isSubmitting } = useContactFormHandler({
    formData,
    setFormData,
    setErrors,
    onSubmit,
    validateForm,
    setOpenSnackbar,
  });

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom textAlign="left" mb={4}>
          Испрати ни предлог локација
        </Typography>
        {contactFormFields.map(
          ({ name, label, type, size, multiline, rows, boxMargin }) => {
            const textField = (
              <TextField
                key={name}
                name={name}
                label={label}
                type={type}
                fullWidth
                size={size}
                multiline={multiline}
                rows={rows}
                value={formData[name]}
                onChange={handleChange}
                error={!!errors[name]}
                helperText={errors[name] || " "}
                sx={styles.formField}
              />
            );
            return boxMargin ? (
              <Box key={name} mb={3}>
                {textField}
              </Box>
            ) : (
              textField
            );
          }
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PrimaryButton type="submit" color="primary" sx={styles.submitButton}>
            {isSubmitting ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Испрати"
            )}
          </PrimaryButton>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={styles.submitAlert}
          variant="filled"
        >
          Предлогот е успешно испратен!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactUsForm;
