import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from "@mui/material";
import styles from "../styles";
import SearchBar from "../../ui/SearchBar";
import map from "../../../assets/images/karta.png";
import api from "../../../../api";
import { Link as RouterLink } from "react-router-dom";

const HeaderHome = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      const response = await api.get(
        `/locations?title=${encodeURIComponent(search)}`
      );
      setResults(response.data);
      console.log("Search results:", response.data);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return (
    <Box sx={{ textAlign: "center", px: { xs: 2, md: 10 } }}>
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

      <Box sx={{ ...styles.searchHome, mt: 4 }}>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={handleSearch}
        />
      </Box>
      {results.length > 0 && (
        <Grid container spacing={3} justifyContent="center">
          {results.map((loc) => (
            <Grid item key={loc._id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea
                  component={RouterLink}
                  to={`/location/${loc.type}/${loc._id}`}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {loc.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {loc.place}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Box
        component="img"
        src={map}
        alt="Map"
        sx={{ ...styles.mapImage, mt: 4 }}
      />
    </Box>
  );
};

export default HeaderHome;
