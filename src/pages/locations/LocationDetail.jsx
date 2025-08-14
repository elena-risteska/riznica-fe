import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeaderDetails from "../../components/pages/locations/HeaderDetails";
import Directions from "../../components/pages/locations/Directions";

const LocationDetail = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setDetails(data.details[0]);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
  }, []);
  return (
    <DefaultLayout breadcrumbs={true}>
      <Box display="flex" flexDirection="column" gap={8}>
        <HeaderDetails
          type={details.type}
          title={details?.title}
          location={details?.location}
          mnv={details?.mnv}
          height={details?.height}
          river={details?.river}
          mountain={details?.mountain}
          mainInfo={details?.mainInfo}
        />
        <Directions mainInfo={details?.mainInfo} />
      </Box>
    </DefaultLayout>
  );
};

export default LocationDetail;
