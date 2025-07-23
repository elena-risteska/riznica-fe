import { Button } from "@mui/material";

const PrimaryButton = ({ children, onClick, type = "button", ...rest }) => {
  return (
    <Button
      variant="contained"
      color="info"
      onClick={onClick}
      type={type}
      fullWidth
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
