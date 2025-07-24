import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import { styles } from "./styles";
import { socials } from "../../config/socials";

const Footer = () => {
  return (
    <Box component="footer" sx={styles.footer}>
      <Box>
        {socials.map(({ label, url, icon }) => (
          <Tooltip title={label} arrow key={label}>
            <IconButton
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.socialMedia}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
      <Typography variant="body2">riznica@gmail.com</Typography>
    </Box>
  );
};

export default Footer;
