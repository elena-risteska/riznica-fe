import { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import api from "../../api";
import Map from "../components/Map";
import DefaultLayout from "../layouts/DefaultLayout";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";

const MapPage = () => {
  const [filters, setFilters] = useState({
    activity: "",
    region: "",
  });
  const [locations, setLocations] = useState([]);

  const fetchLocations = async () => {
    try {
      const res = await api.get("/locations", { params: filters });
      setLocations(res.data);
    } catch (err) {
      console.error("Failed to fetch locations:", err);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    fetchLocations();
  };

  return (
    <DefaultLayout>
      <Box display="flex">
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 300,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 300,
              boxSizing: "border-box",
              p: 3,
              top: 80,
              bottom: 0,
              height: "580px",
              borderRadius: 5,
            },
          }}
        >
          <Typography variant="h6" gutterBottom align="center">
            Филтри
          </Typography>

          <FormControl
            fullWidth
            margin="normal"
            sx={{
              mt: 6,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&:hover fieldset": {
                  borderColor: "primary.dark",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
              },
            }}
          >
            <InputLabel id="activity-label">Активност</InputLabel>
            <Select
              labelId="activity-label"
              label="Активност"
              name="activity"
              value={filters.activity}
              onChange={handleFilterChange}
            >
              <MenuItem value="">Сите</MenuItem>
              <MenuItem value="Планинарење">Планинарење</MenuItem>
              <MenuItem value="Велосипедизам">Велосипедизам</MenuItem>
              <MenuItem value="Кајакарење">Кајакарење</MenuItem>
              <MenuItem value="Пливање">Пливање</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            margin="normal"
            sx={{
              mt: 6,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&:hover fieldset": {
                  borderColor: "primary.dark",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: 2,
                },
              },
            }}
          >
            <InputLabel id="region-label">Регион</InputLabel>
            <Select
              labelId="region-label"
              label="Регион"
              name="region"
              value={filters.region}
              onChange={handleFilterChange}
            >
              <MenuItem value="">Сите</MenuItem>
              <MenuItem value="Пелагониски">Пелагониски</MenuItem>
              <MenuItem value="Скопски">Скопски</MenuItem>
              <MenuItem value="Вардарски">Вардарски</MenuItem>
              <MenuItem value="Источен">Источен</MenuItem>
              <MenuItem value="Југозападен">Југозападен</MenuItem>
              <MenuItem value="Североисточен">Североисточен</MenuItem>
            </Select>
          </FormControl>

          <PrimaryButton
            onClick={handleSearch}
            sx={{
              mt: 2,
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: 3,
            }}
          >
            Пребарај
          </PrimaryButton>
        </Drawer>

        <Box flexGrow={1} height="500px">
          <Map
            zoom={8}
            center={[41.6086, 21.7453]}
            markerData={
              locations.length > 0
                ? locations.map((loc) => ({
                    position:
                      loc.coords?.length === 2
                        ? [Number(loc.coords[0]), Number(loc.coords[1])]
                        : null,
                    text: loc.title,
                  }))
                : []
            }
          />
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default MapPage;
