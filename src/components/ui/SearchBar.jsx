import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, onChange, onSubmit, sx = {} }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSubmit) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <TextField
      fullWidth
      variant="filled"
      placeholder="Пребарувај..."
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      sx={{
        backgroundColor: "#B12C00",
        borderRadius: "999px",
        input: {
          color: "white",
          padding: "12px",
        },
        "& .MuiFilledInput-root": {
          borderRadius: "999px",
          backgroundColor: "#B12C00",
        },
        "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
          {
            display: "none",
          },
        ...sx,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={onSubmit}
              edge="end"
              size="small"
              sx={{ color: "white" }}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        disableUnderline: true,
      }}
    />
  );
};

export default SearchBar;
