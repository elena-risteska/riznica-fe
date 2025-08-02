import React from "react";
import { Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";

const HoverableMarker = ({ position, popupText, redirectTo, icon }) => {
  const navigate = useNavigate();
  const markerRef = React.useRef();

  return (
    <Marker
      position={position}
      ref={markerRef}
      icon={icon}
      eventHandlers={{
        click: () => navigate(redirectTo),
        mouseover: (e) => e.target.openPopup(),
        mouseout: (e) => e.target.closePopup(),
      }}
    >
      <Popup closeButton={false}>{popupText}</Popup>
    </Marker>
  );
};

export default HoverableMarker;
