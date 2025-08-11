import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const contactFormFields = [
  {
    name: "fullName",
    label: "Име и презиме",
    type: "text",
    multiline: false,
    icon: <PersonIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "email",
    label: "Електронска пошта",
    type: "email",
    multiline: false,
    icon: <EmailIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "message",
    label: "Напиши што мислиш дека треба да додадеме",
    type: "text",
    multiline: true,
    rows: 4,
    boxMargin: true,
  },
];

export default contactFormFields;
