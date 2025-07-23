import { Button } from "@mui/material";

const TextButton = ({
  children,
  onClick,
  isActive = "false",
  type = "button",
  sx = {},
  ...rest
}) => {
  return (
    <Button
      variant={isActive ? "contained" : "text"}
      onClick={onClick}
      type={type}
      sx={{
        color: isActive ? "white" : "black",
        px: "2rem",
        py: "0.5rem",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "white",
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TextButton;
