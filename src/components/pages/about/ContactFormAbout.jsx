import { Box, Typography } from "@mui/material";
import { useState } from "react";
import styles from "../styles";
import ContactUsForm from "../../forms/ContactUsForm";
import photo from "../../../assets/images/about2.webp";

const ContactFormAbout = () => {
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
    <Box sx={styles.contactFormBox}>
      <Box sx={{ order: { xs: 2, md: 1 } }}>
        <ContactUsForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </Box>
      <Box>
        <Box component="img" src={photo} alt="ATV" sx={styles.imageForm} />
        <Typography variant="subtitle1" align="center" sx={styles.subtitle}>
          Црква „Св. Јован Канео“ - Охрид
        </Typography>
      </Box>
    </Box>
  );
};
export default ContactFormAbout;
