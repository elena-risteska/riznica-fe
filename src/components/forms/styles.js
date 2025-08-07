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
  loginFields: {
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
  },
  submitLogin: {
    width: "80%",
    borderRadius: 4,
    alignSelf: "center",
    color: "info.main",
    backgroundColor: "white",
  },
};

export default styles;
