import { useState, useEffect } from "react";
import useVisibleItems from "../hooks/useVisibleItems";
import Banner from "../components/layout/Banner";
import DefaultLayout from "../layouts/DefaultLayout";
import CommentsHome from "../components/pages/CommentsHome";
import HeaderHome from "../components/pages/HeaderHome";
import LocationsHome from "../components/pages/LocationsHome";
import MapHome from "../components/pages/MapHome";
import ActivitiesHome from "../components/pages/ActivitiesHome";

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
        setLocations(data.locations);
        setActivities(data.activities);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
  }, []);

  return (
    <DefaultLayout>
      <HeaderHome />
      <LocationsHome locations={locations} visibleItems={visibleItems} />
      <MapHome />
      <ActivitiesHome activities={activities} visibleItems={4} />
      <CommentsHome comments={comments} visibleItems={3} />
      <Banner />
    </DefaultLayout>
  );
};
export default Home;
