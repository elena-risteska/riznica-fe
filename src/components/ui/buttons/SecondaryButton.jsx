import { Button } from "@mui/material";

const SecondaryButton = ({
  children,
  onClick,
  type = "button",
  sx = {},
  ...rest
}) => {
  return (
    <Button
      variant="outlined"
      color="primary"
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

export default SecondaryButton;
