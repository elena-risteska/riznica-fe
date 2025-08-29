import { useState, useEffect } from "react";
import { getLocations } from "../services/homeService";
import useVisibleItems from "../hooks/useVisibleItems";
import Banner from "../components/layout/Banner";
import DefaultLayout from "../layouts/DefaultLayout";
import CommentsHome from "../components/pages/home/CommentsHome";
import HeaderHome from "../components/pages/home/HeaderHome";
import ScrollerSegment from "../components/ScrollerSegment";
import MapHome from "../components/pages/home/MapHome";

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [comments, setComments] = useState([]);
  const [activities, setActivities] = useState([]);
  const visibleItems = useVisibleItems();

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setComments(data.comments);
        setActivities(data.activities);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
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
        to="/locations"
      />
      <MapHome />
      {/* <ScrollerSegment
        items={activities}
        visibleItems={visibleItems}
        title="Адреналински активности"
        to="/activities"
      /> */}
      <CommentsHome comments={comments} visibleItems={visibleItems} />
      <Banner />
    </DefaultLayout>
  );
};
export default Home;
