import { useState } from "react";

export const useInfoFormHandler = ({
  formData,
  setFormData,
  setErrors,
  onSubmit,
  validateForm,
  setOpenSnackbar,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit?.(formData);
        // setFormData({ fullName: "", email: "", message: "" });
        setErrors({});
        setOpenSnackbar(true);
      } catch (err) {
        console.error("Submission error:", err);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
      const firstInvalid = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstInvalid}"]`)?.focus();
    }
  };

  return { handleChange, handleSubmit, isSubmitting };
};
