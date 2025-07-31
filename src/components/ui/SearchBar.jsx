import { TextField, InputAdornment, IconButton } from "@mui/material";
import { search } from "./styles";
import { handleSearchKeyDown } from "../../utils/utilities";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, onChange, onSubmit, sx = {} }) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      placeholder="Пребарувај..."
      value={value}
      onChange={onChange}
      onKeyDown={(e) => handleSearchKeyDown(e, onSubmit)}
      sx={search()}
      InputProps={{
        disableUnderline: true,
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
      }}
    />
  );
};

export default SearchBar;
