import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export const registerFormFields = [
  {
    name: "firstName",
    label: "Име",
    type: "text",
    icon: <PersonIcon sx={{ color: "white" }} />,
  },
  {
    name: "lastName",
    label: "Презиме",
    type: "text",
    icon: <PersonIcon sx={{ color: "white" }} />,
  },
  {
    name: "username",
    label: "Корисничко име",
    type: "text",
    icon: <AccountCircleIcon sx={{ color: "white" }} />,
  },
  {
    name: "email",
    label: "Електронска пошта",
    type: "email",
    icon: <EmailIcon sx={{ color: "white" }} />,
  },
  {
    name: "password",
    label: "Лозинка",
    type: "password",
    icon: <LockIcon sx={{ color: "white" }} />,
  },
];
