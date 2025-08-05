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
};

export default styles;
