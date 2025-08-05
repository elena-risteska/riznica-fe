import { useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "../styles";
import SearchBar from "../../ui/SearchBar";
import map from "../../../assets/images/karta.png";

const handleSearch = () => {
  console.log("Searching for:", search);
};

const HeaderHome = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Box sx={styles.textHome}>
        <Typography variant="h2">Македонска ризница</Typography>
        <Typography variant="body1" mt={2}>
          Збирштина на сите подзаборавени места, традиции и специјалитети, за
          сите ентузијасти за своето.
        </Typography>
        <Typography variant="body1">
          Целата приказна на добропознатите атракции, за сечија посета.
        </Typography>
      </Box>
      <Box sx={styles.searchHome}>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={handleSearch}
        />
      </Box>
      <Box component="img" src={map} alt="Map" sx={styles.mapImage} />
    </>
  );
};

export default HeaderHome;
