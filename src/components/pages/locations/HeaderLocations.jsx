import { Box, Typography } from "@mui/material";
import { useState } from "react";
import SearchBar from "../../ui/SearchBar";
import styles from "./styles";

const handleSearch = () => {
  console.log("Searching for:", search);
};
const HeaderLocations = ({ title, subtitle, reverse }) => {
  const [search, setSearch] = useState("");

  return (
    <Box sx={styles.header}>
      <Box sx={styles.text(reverse)}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h6" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
      <Box sx={styles.searchBar(reverse)}>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={handleSearch}
        />
      </Box>
    </Box>
  );
};
export default HeaderLocations;
