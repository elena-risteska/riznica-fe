import { Button } from "@mui/material";

const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  sx = {},
  ...rest
}) => {
  return (
    <Button
      variant="contained"
      color="info"
      onClick={onClick}
      type={type}
      fullWidth
      sx={{ ...sx }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
