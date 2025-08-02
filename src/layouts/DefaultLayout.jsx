import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box component="main" flex={1} pt={8} px={6}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
