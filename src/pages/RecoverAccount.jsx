import { useState } from "react";
import ForgotPasswordLayout from "../layouts/ForgotPasswordLayout";
import RecoverAccountForm from "../components/forms/RecoverAccountForm";

const RecoverAccount = () => {
  const [formData, setFormData] = useState({
    code: "",
    password: "",
  });

  const handleSubmit = async (data) => {
    try {
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <ForgotPasswordLayout>
      <RecoverAccountForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </ForgotPasswordLayout>
  );
};
export default RecoverAccount;
