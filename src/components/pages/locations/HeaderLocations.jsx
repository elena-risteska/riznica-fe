import { Box, Typography } from "@mui/material";
import { useState } from "react";
import SearchBar from "../../ui/SearchBar";
import styles from "./styles";

const handleSearch = () => {
  console.log("Searching for:", search);
};
const HeaderLocations = () => {
  const [search, setSearch] = useState("");

  return (
    <Box sx={styles.header}>
      <Box sx={styles.text}>
        <Typography variant="h2">Локации</Typography>
        <Typography variant="h6" color="text.secondary">
          Пребарувај низ бројноста локации и погледни што се крие во оваа земја
        </Typography>
      </Box>
      <Box sx={styles.searchBar}>
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
