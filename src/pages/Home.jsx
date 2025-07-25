import { Typography } from "@mui/material";
import { useState } from "react";
import avatar from "../../public/avatar.svg";
import Banner from "../components/layout/Banner";
import SearchBar from "../components/ui/SearchBar";
import DefaultLayout from "../layouts/DefaultLayout";
import CommentCard from "../components/ui/cards/CommentCard";

const Home = () => {
  const [search, setSearch] = useState("");

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
        <CommentCard
          photo={avatar}
          firstName="Elena"
          lastName="Risteska"
          username="elena"
          comment="very nice"
          loading={false}
          post="/locations"
          user="/activities"
        />
        <Banner />
      </DefaultLayout>
    </>
  );
};
export default Home;
