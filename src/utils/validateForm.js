export const validateForm = (formData) => {
  const errors = {};

  if ("fullName" in formData && !formData.fullName?.trim()) {
    errors.fullName = "Внесете име и презиме";
  }

  if ("email" in formData) {
    if (!formData.email?.trim()) {
      errors.email = "Внесете електронска пошта";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Невалидна електронска пошта";
    }
  }

  if ("password" in formData) {
    if (!formData.password?.trim()) {
      errors.password = "Внесете лозинка";
    } else if (formData.password.length < 8) {
      errors.password = "Лозинката мора да содржи најмалку 8 карактери";
    }
  }

  if ("message" in formData && !formData.message?.trim()) {
    errors.message = "Внесете порака";
  }

  return errors;
};
