export const validateForm = (formData) => {
  const errors = {};

  if (!formData.fullName?.trim()) {
    errors.fullName = "Внесете име и презиме";
  }

  if (!formData.email?.trim()) {
    errors.email = "Внесете е-пошта";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Невалидна е-пошта";
  }

  if (!formData.message?.trim()) {
    errors.message = "Внесете порака";
  }

  return errors;
};
