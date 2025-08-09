import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validateForm";

export const useRegisterFormHandler = (formData, setFormData, onSubmit) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        if (onSubmit) {
          await onSubmit(formData);
          console.log("Form data:", formData);
          navigate("/");
        }
      } catch (err) {
        console.error("Submission error:", err);
      }
    }
  };

  return {
    formData,
    setFormData,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
};
