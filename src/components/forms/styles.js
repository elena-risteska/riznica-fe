import { keyframes } from "@mui/system";

const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
  100% { transform: translateX(0); }
`;

export const loginFields = (hasError) => ({
  mt: 2,
  input: { color: "white" },
  label: { color: "white" },
  "& label.Mui-focused": {
    color: "white",
  },
  "& fieldset": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 4,
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiFormHelperText-root": {
    minHeight: {
      xs: "14px",
      sm: "16px",
      md: "18px",
    },
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "white",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "white",
  },
  "& .MuiFormLabel-asterisk": {
    color: "white",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
    boxShadow: "0 0 0 1000px transparent inset !important",
    WebkitTextFillColor: "white !important",
    transition: "background-color 5000s ease-in-out 0s",
  },
  ...(hasError && {
    animation: `${shake} 0.3s ease-in-out`,
  }),
});

export const registerFields = (hasError) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 4,
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 100px #fff inset",
    WebkitTextFillColor: "inherit",
    caretColor: "inherit",
  },
  "& input:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0 100px #fff inset",
  },
  input: { color: "white" },
  label: { color: "white" },
  "& .MuiFormHelperText-root": {
    minHeight: {
      xs: "14px",
      sm: "16px",
      md: "18px",
    },
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& fieldset": {
    borderColor: "white",
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "white",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "white",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
    boxShadow: "0 0 0 1000px transparent inset !important",
    WebkitTextFillColor: "white !important  ",
    transition: "background-color 5000s ease-in-out 0s",
  },
  ...(hasError && {
    animation: `${shake} 0.3s ease-in-out`,
  }),
});

const styles = {
  formField: {
    "& .MuiOutlinedInput-root": { borderRadius: 3 },
    "& .MuiFormHelperText-root": {
      minHeight: {
        xs: "14px",
        sm: "16px",
        md: "18px",
      },
    },
  },
  submitButton: {
    width: "80%",
    borderRadius: 4,
    color: "white",
  },
  submitAlert: {
    width: "100%",
    borderRadius: 3,
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.primary.contrastText,
    boxShadow: 3,
  },
  submitLogin: {
    width: "80%",
    borderRadius: 4,
    alignSelf: "center",
    color: "info.main",
    backgroundColor: "white",
    mb: 2,
  },
  rememberMe: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    pb: 4,
  },
  submitRegister: {
    mt: 3,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "white",
    color: "primary.main",
  },
  header: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    mb: "2px",
  },
  forgotPasswordField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 4,
      "& fieldset": { borderColor: "black" },
      "&:hover fieldset": { borderColor: "black" },
      "&.Mui-focused fieldset": { borderColor: "black" },
    },
    "& .MuiInputLabel-root": {
      color: "text.secondary",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
    },
    "& .MuiFormHelperText-root": {
      minHeight: {
        xs: "14px",
        sm: "16px",
        md: "18px",
      },
    },
  },
};

export default styles;
