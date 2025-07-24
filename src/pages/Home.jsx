import { Typography } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Banner from "../components/layout/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <Typography variant="h2">Home Page</Typography>
      <Banner />
      <Footer />
    </>
  );
};
export default Home;
