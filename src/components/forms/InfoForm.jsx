import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import { validateForm } from "../../utils/validateForm";
import { useInfoFormHandler } from "../../hooks/useInfoFormHandles";
import InfoFormFields from "../../config/infoFormFields";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import styles from "./styles";

const InfoForm = ({ formData, setFormData, onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { handleChange, handleSubmit, isSubmitting } = useInfoFormHandler({
    formData,
    setFormData,
    setErrors,
    onSubmit,
    validateForm,
    setOpenSnackbar,
  });

  const cities = [
    { value: "skopje", label: "Скопје" },
    { value: "bitola", label: "Битола" },
    { value: "ohrid", label: "Охрид" },
    { value: "stip", label: "Штип" },
    { value: "tetovo", label: "Тетово" },
  ];

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} maxWidth="300px">
        {InfoFormFields.map(
          ({ name, label, type, multiline, rows, boxMargin, icon }) => {
            const isCity = name === "city";
            const field = (
              <TextField
                key={name}
                name={name}
                label={label}
                type={isCity ? undefined : type}
                fullWidth
                size="small"
                multiline={multiline}
                rows={rows}
                value={formData[name]}
                onChange={handleChange}
                error={!!errors[name]}
                helperText={errors[name] || " "}
                sx={styles.formField}
                InputProps={{
                  startAdornment: icon ? (
                    <InputAdornment position="start">{icon}</InputAdornment>
                  ) : null,
                }}
                select={isCity}
              >
                {isCity &&
                  cities.map((c) => (
                    <MenuItem key={c.value} value={c.value}>
                      {c.label}
                    </MenuItem>
                  ))}
              </TextField>
            );
            return boxMargin ? <Box key={name}>{field}</Box> : field;
          }
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PrimaryButton type="submit" color="primary" sx={styles.submitButton}>
            {isSubmitting ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Промени"
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
          Промените се успешно зачувани!
        </Alert>
      </Snackbar>
    </>
  );
};

export default InfoForm;
