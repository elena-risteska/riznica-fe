import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Box } from "@mui/material";
import { styles, primaryColorIcon } from "./styles";
import HoverableMarker from "../utils/hoverableMarker";

const Map = ({ center = [41.9981, 21.4254], zoom = 15, markerData = [] }) => {
  return (
    <Box sx={styles.map}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markerData.map((marker, index) => (
          <HoverableMarker
            key={index}
            position={marker.position}
            popupText={marker.text}
            redirectTo={marker.redirectTo}
            icon={primaryColorIcon}
          />
        ))}
      </MapContainer>
    </Box>
  );
};

export default Map;
