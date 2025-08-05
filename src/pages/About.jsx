import { Typography } from "@mui/material";
import DefaultLayout from "../layouts/DefaultLayout";
import TextSegmentAbout from "../components/pages/about/TextSegmentAbout";
import ContactFormAbout from "../components/pages/about/ContactFormAbout";

const About = () => {
  return (
    <DefaultLayout>
      <Typography variant="h3" align="center" mb={1}>
        за македонската ризница
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center">
        како да ја негуваме и богатиме
      </Typography>
      <TextSegmentAbout />
      <ContactFormAbout />
    </DefaultLayout>
  );
};
export default About;
