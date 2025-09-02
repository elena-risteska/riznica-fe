import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Loader from "../../components/ui/Loader";
import useVisibleItems from "../../hooks/useVisibleItems";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeaderDetails from "../../components/pages/locations/HeaderDetails";
import Directions from "../../components/pages/locations/Directions";
import Map from "../../components/Map";
import Story from "../../components/pages/locations/Story";
import ScrollerSegment from "../../components/ScrollerSegment";
import Tour from "../../components/pages/activities/Tour";
import api from "../../../api";

const LocationDetail = () => {
  const { type, id } = useParams();
  const [details, setDetails] = useState([]);
  const [locations, setLocations] = useState([]);
  const visibleItems = useVisibleItems();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await api.get("/locations");
        const allLocations = response.data;

        const currentLocation = allLocations.find((loc) => loc._id === id);
        setDetails(currentLocation);

        const similarLocations = allLocations.filter(
          (loc) => loc.type === type && loc._id !== id
        );
        const locationsWithPath = similarLocations.map((loc) => ({
          ...loc,
          to: `/location/${loc.type}/${loc._id}`,
        }));
        setLocations(locationsWithPath);
      } catch (err) {
        console.error("Failed to fetch locations:", err);
      }
    };

    fetchLocations();
  }, [type, id]);

  if (!details) return <Loader />;

  console.log(id, "id");
  console.log(details, "details");
  console.log(locations, "locations");

  return (
    <DefaultLayout breadcrumbs={true}>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ xs: 2, md: 8 }}
        px={{ xs: 2, md: 10 }}
      >
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
        <Tour text1={details?.mainInfo} text2={details?.mainInfo} />

        <Story text={details?.mainInfo} />
        <Box>
          <ScrollerSegment
            items={locations}
            visibleItems={visibleItems}
            title="Слични препораки "
            to="/location"
          />
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default LocationDetail;
