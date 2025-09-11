import { useState, useEffect } from "react";
import { getLocations } from "../services/homeService";
import useVisibleItems from "../hooks/useVisibleItems";
import Banner from "../components/layout/Banner";
import DefaultLayout from "../layouts/DefaultLayout";
import HeaderHome from "../components/pages/home/HeaderHome";
import ScrollerSegment from "../components/ScrollerSegment";
import MapHome from "../components/pages/home/MapHome";

const Home = () => {
  const [locations, setLocations] = useState([]);
  const visibleItems = useVisibleItems();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationsData = await getLocations();
        setLocations(locationsData);
      } catch (err) {
        console.error("Failed to load data from api:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <HeaderHome />
      <ScrollerSegment
        items={locations}
        visibleItems={visibleItems}
        title="Необични локации"
        to="/location"
      />
      <MapHome />
      <Banner />
    </DefaultLayout>
  );
};
export default Home;
