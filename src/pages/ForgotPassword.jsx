import ForgotPasswordLayout from "../layouts/ForgotPasswordLayout";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";

const ForgotPassword = () => {
  const handleSubmit = async (data) => {
    try {
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <ForgotPasswordLayout>
      <ForgotPasswordForm onSubmit={handleSubmit} />
    </ForgotPasswordLayout>
  );
};
export default ForgotPassword;
