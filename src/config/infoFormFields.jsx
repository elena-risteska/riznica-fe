import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const InfoFormFields = [
  {
    name: "firstName",
    label: "Име",
    type: "text",
    icon: <PersonIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "lastName",
    label: "Презиме",
    type: "text",
    icon: <PersonIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "username",
    label: "Корисничко име",
    type: "text",
    icon: <AccountCircleIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "email",
    label: "Електронска пошта",
    type: "email",
    icon: <EmailIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "city",
    label: "Град",
    icon: <LocationOnIcon sx={{ color: "primary.main" }} />,
  },
  {
    name: "bio",
    label: "Биографија",
    type: "text",
    multiline: true,
    rows: 2,
    boxMargin: true,
  },
];

export default InfoFormFields;
