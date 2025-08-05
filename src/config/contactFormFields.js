const contactFormFields = [
  {
    name: "fullName",
    label: "Име и презиме",
    type: "text",
    size: "small",
    multiline: false,
  },
  {
    name: "email",
    label: "Електронска пошта",
    type: "email",
    size: "small",
    multiline: false,
  },
  {
    name: "message",
    label: "Напиши што мислиш дека треба да додадеме",
    type: "text",
    size: "small",
    multiline: true,
    rows: 4,
    boxMargin: true,
  },
];

export default contactFormFields;
