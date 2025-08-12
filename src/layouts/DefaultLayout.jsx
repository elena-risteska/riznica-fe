import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BreadcrumbsComponent from "../components/Breadcrumbs";

const DefaultLayout = ({ children, breadcrumbs }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box display={breadcrumbs ? "flex" : "none"} mt={1} ml={4}>
        <BreadcrumbsComponent />
      </Box>
      <Box
        component="main"
        flex={1}
        pt={breadcrumbs ? 2 : 8}
        px={{ xs: 4, sm: 6 }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
