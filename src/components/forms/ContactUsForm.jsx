import { useState } from "react";
import { Box, TextField, Typography, Snackbar, Alert } from "@mui/material";
import { validateForm } from "../../utils/validateForm";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import styles from "./styles";

const ContactUsForm = ({ formData, setFormData, onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit?.(formData);
      setFormData({ fullName: "", email: "", message: "" });
      setErrors({});
      setOpenSnackbar(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom textAlign="left" mb={4}>
          Испрати ни предлог локација
        </Typography>
        <TextField
          label="Име и презиме"
          name="fullName"
          fullWidth
          size="small"
          value={formData.fullName}
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName || " "}
          sx={styles.formField}
        />
        <TextField
          label="Електронска пошта"
          name="email"
          type="email"
          fullWidth
          size="small"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email || " "}
          sx={styles.formField}
        />
        <Box mb={3}>
          <TextField
            label="Напиши што мислиш дека треба да додадеме"
            name="message"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message || " "}
            sx={styles.formField}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PrimaryButton type="submit" color="primary" sx={styles.submitButton}>
            Испрати
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
          sx={{
            width: "100%",
            borderRadius: 3,
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.contrastText,
            boxShadow: 3,
          }}
          variant="filled"
        >
          Предлогот е успешно испратен!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactUsForm;
