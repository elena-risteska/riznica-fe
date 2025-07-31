import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Banner from "../components/layout/Banner";
import SearchBar from "../components/ui/SearchBar";
import DefaultLayout from "../layouts/DefaultLayout";
import CommentCard from "../components/ui/cards/CommentCard";
import HorizontalList from "../components/HorizontalList";
import PhotoCard from "../components/ui/cards/PhotoCard";
import photo from "../../public/avatar.svg";

const Home = () => {
  const [search, setSearch] = useState("");
  const [comments, setComments] = useState([]);
  const [locations, setLocations] = useState([]);

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
      <HorizontalList
        items={locations}
        visibleItems={4}
        cardType="photo"
        renderItem={(item) => <PhotoCard {...item} />}
      />
      <HorizontalList
        items={comments}
        visibleItems={4}
        cardType="comment"
        renderItem={(item) => <CommentCard {...item} />}
      />
      <Banner />
    </DefaultLayout>
  );
};
export default Home;
