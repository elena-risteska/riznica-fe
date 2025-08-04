import { useState } from "react";
import { Typography, Box } from "@mui/material";
import DefaultLayout from "../layouts/DefaultLayout";
import photo1 from "../assets/images/babuna1.jpg";
import photo2 from "../assets/images/atv.jpg";
import ContactUsForm from "../components/forms/ContactUsForm";

const About = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (data) => {
    try {
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <DefaultLayout>
      <Typography variant="h3" align="center" mb={1}>
        за македонската ризница
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center">
        како да ја негуваме и богатиме
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          justifyContent: "space-evenly",
          mt: { xs: 5, md: 10 },
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography
          variant="body1"
          lineHeight={3}
          width={{ xs: "100", md: "30%" }}
        >
          Македонската ризница е на секого. На секој еден кој знае што поседува.
          На сите што знаат како да ја негуваат и збогатуваат. Тоа е скапоценост
          која треба да се чува и цени. Тоа е потенцијал кој треба да се знае
          како да се искористи. И во никој случај да не се дозволи да биде
          потценет, засенет во збирштината од светски убавини. Да си го знаеме
          своето за да си го сакаме како вистински наше.
        </Typography>
        <Box
          component="img"
          src={photo1}
          alt="Vodopadot na Babuna"
          sx={{
            width: { xs: "250px", md: "400px" },
            height: "auto",
            borderRadius: 10,
          }}
        />
        <Typography
          variant="body1"
          lineHeight={3}
          width={{ xs: "100", md: "30%" }}
        >
          Оваа платформа постои за да ги чува македонските убавини за кои
          помалку се слуша. Од друга страна пак, чува приказни и легенди и за
          места за кои знае секој Македонец и веројатно ги има посетено повеќе
          од еднаш. Со сета своја сеопфатност и разноликост, како никоја друга,
          несебично е водич за сите Македонци и посетители на Македонија.
          Прошетај ги скриените делови на Македонија со приказна.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          mt: { xs: 8, md: 15 },
          mb: 8,
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <ContactUsForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
          />
        </Box>
        <Box
          component="img"
          src={photo2}
          alt="ATV"
          sx={{
            width: { xs: "300px", md: "600px" },
            height: "auto",
            borderRadius: 10,
            order: { xs: 1, md: 2 },
          }}
        />
      </Box>
    </DefaultLayout>
  );
};
export default About;
