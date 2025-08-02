import { useState, useEffect } from "react";
import useVisibleItems from "../hooks/useVisibleItems";
import Banner from "../components/layout/Banner";
import DefaultLayout from "../layouts/DefaultLayout";
import CommentCard from "../components/ui/cards/CommentCard";
import HorizontalList from "../components/HorizontalList";
import HeaderHome from "../components/pages/HeaderHome";
import LocationsHome from "../components/pages/LocationsHome";

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [comments, setComments] = useState([]);

  const visibleItems = useVisibleItems();

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setComments(data.comments);
        setLocations(data.locations);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
      });
  }, []);

  return (
    <DefaultLayout>
      <HeaderHome />
      <LocationsHome locations={locations} visibleItems={visibleItems} />
      <HorizontalList
        items={comments}
        visibleItems={visibleItems}
        cardType="comment"
        renderItem={(item) => <CommentCard {...item} />}
      />
      <Banner />
    </DefaultLayout>
  );
};
export default Home;
