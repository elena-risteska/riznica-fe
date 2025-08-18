import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeaderDetails from "../../components/pages/locations/HeaderDetails";
import Directions from "../../components/pages/locations/Directions";
import Map from "../../components/Map";
import Story from "../../components/pages/locations/Story";
import ScrollerSegment from "../../components/ScrollerSegment";

const LocationDetail = () => {
  const [details, setDetails] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setDetails(data.details[0]);
        setLocations(data.locations);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
  }, []);
  return (
    <DefaultLayout breadcrumbs={true}>
      <Box display="flex" flexDirection="column" gap={8} px={10}>
        <HeaderDetails
          type={details.type}
          title={details?.title}
          location={details?.location}
          mnv={details?.mnv}
          height={details?.height}
          river={details?.river}
          mountain={details?.mountain}
          mainInfo={details?.mainInfo}
          coords={details?.coords}
        />
        <Directions mainInfo={details?.mainInfo} />
        <Box sx={{ height: 600, my: 4 }}>
          <Map
            center={[42.17629, 22.39641]}
            markerData={[
              {
                position: [42.17629, 22.39641],
                text: "Станечки водопад",
              },
            ]}
          />
        </Box>
        <Story text={details?.mainInfo} />
        <Box>
          <ScrollerSegment
            items={locations}
            visibleItems={4}
            title="Слични препораки "
            to="/locations"
          />
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default LocationDetail;
