export const validateForm = (formData) => {
  const errors = {};

  if ("fullName" in formData && !formData.fullName?.trim()) {
    errors.fullName = "Внеси име и презиме";
  }

  if ("firstName" in formData && !formData.firstName?.trim()) {
    errors.firstName = "Внеси име";
  }

  if ("lastName" in formData && !formData.lastName?.trim()) {
    errors.lastName = "Внеси презиме";
  }

  if ("username" in formData && !formData.username?.trim()) {
    errors.username = "Внеси корисничко име";
  }

  if ("email" in formData) {
    if (!formData.email?.trim()) {
      errors.email = "Внеси електронска пошта";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Невалидна електронска пошта";
    }
  }

  if ("password" in formData) {
    if (!formData.password?.trim()) {
      errors.password = "Внеси лозинка";
    } else if (formData.password.length < 8) {
      errors.password = "Лозинката мора да содржи најмалку 8 карактери";
    }
  }

  if ("message" in formData && !formData.message?.trim()) {
    errors.message = "Внеси порака";
  }

  return errors;
};
