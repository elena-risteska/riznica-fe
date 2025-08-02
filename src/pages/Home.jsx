import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useVisibleItems from "../hooks/useVisibleItems";
import Banner from "../components/layout/Banner";
import SearchBar from "../components/ui/SearchBar";
import DefaultLayout from "../layouts/DefaultLayout";
import CommentCard from "../components/ui/cards/CommentCard";
import HorizontalList from "../components/HorizontalList";
import PhotoCard from "../components/ui/cards/PhotoCard";
import Map from "../components/Map";

const Home = () => {
  const [search, setSearch] = useState("");
  const [comments, setComments] = useState([]);
  const [locations, setLocations] = useState([]);

  const markers = [
    {
      position: [41.9981, 21.4254],
      text: "Skopje Center",
      redirectTo: "/details",
    },
    {
      position: [41.995, 21.43],
      text: "Old Bazaar",
      redirectTo: "/details",
    },
  ];

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

  const handleSearch = () => {
    console.log("Searching for:", search);
  };

  return (
    <DefaultLayout>
      <Typography variant="h2">Home Page</Typography>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSearch}
      />
      <Map markerData={markers} />
      <HorizontalList
        items={locations}
        visibleItems={visibleItems}
        cardType="photo"
        renderItem={(item) => <PhotoCard {...item} />}
      />
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
