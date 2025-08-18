import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import DefaultLayout from "../../layouts/DefaultLayout";
import HeaderDetails from "../../components/pages/activities/HeaderDetails";
import Directions from "../../components/pages/activities/Directions";

const ActivitiesDetail = () => {
  const [details, setDetails] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setDetails(data.detailsActivities[0]);
        setActivities(data.locations);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
  }, []);
  return (
    <DefaultLayout breadcrumbs={true}>
      <Box sx={{ display: "flex", flexDirection: "column", px: 8, gap: 8 }}>
        <HeaderDetails
          title={details?.title}
          length={details?.length}
          mnv={details?.mnv}
          hard={details?.hard}
          time={details?.time}
          start={details?.start}
          elevation={details?.elevation}
          mountain={details?.mountain}
          mainInfo={details?.mainInfo}
          coords={details?.coords}
        />
        <Directions text={details?.mainInfo} />
      </Box>
    </DefaultLayout>
  );
};

export default ActivitiesDetail;
