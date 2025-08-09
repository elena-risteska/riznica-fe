import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validateForm";

const useLoginFormHandler = ({ onSubmit, formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setLoading(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
        console.log("Form data:", formData);
        navigate("/");
        return true;
      }
    } catch (err) {
      console.error("Submission error:", err);
      return false;
    }
  };

  return {
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useLoginFormHandler;
