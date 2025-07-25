import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Banner from "../components/layout/Banner";
import SearchBar from "../components/ui/SearchBar";
import DefaultLayout from "../layouts/DefaultLayout";
import CommentCard from "../components/ui/cards/CommentCard";
import HorizontalList from "../components/HorizontalList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/mock-data.json")
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
      })
      .catch((err) => {
        console.error("Failed to load comments:", err);
      });
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", search);
  };

  return (
    <>
      <DefaultLayout>
        <Typography variant="h2">Home Page</Typography>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={handleSearch}
        />
        <HorizontalList
          items={comments}
          visibleItems={4}
          renderItem={(item) => <CommentCard {...item} />}
        />
        <Banner />
      </DefaultLayout>
    </>
  );
};
export default Home;
