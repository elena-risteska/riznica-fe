import { Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Banner from "../components/layout/Banner";
import SearchBar from "../components/ui/SearchBar";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
  };
  return (
    <>
      <Navbar />
      <Typography variant="h2">Home Page</Typography>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSearch}
      />
      <Banner />
      <Footer />
    </>
  );
};
export default Home;
