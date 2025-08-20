export const validateForm = (formData) => {
  const errors = {};

  const nameRegex = /^[A-Za-zА-Ша-ш\s]+$/;

  if ("fullName" in formData) {
    if (!formData.fullName?.trim()) {
      errors.fullName = "Внеси име и презиме";
    } else if (!nameRegex.test(formData.fullName.trim())) {
      errors.fullName =
        "Името и презимето не смеат да содржат броеви или знаци";
    }
  }

  if ("firstName" in formData) {
    if (!formData.firstName?.trim()) {
      errors.firstName = "Внеси име";
    } else if (!nameRegex.test(formData.firstName.trim())) {
      errors.firstName = "Името не смее да содржи броеви или знаци";
    }
  }

  if ("lastName" in formData) {
    if (!formData.lastName?.trim()) {
      errors.lastName = "Внеси презиме";
    } else if (!nameRegex.test(formData.lastName.trim())) {
      errors.lastName = "Презимето не смее да содржи броеви или знаци";
    }
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

  if ("code" in formData) {
    if (!formData.code?.trim()) {
      errors.code = "Внеси го кодот";
    } else if (!/^\d{6}$/.test(formData.code)) {
      errors.code = "Кодот мора да содржи точно 6 цифри";
    }
  }

  if ("message" in formData && !formData.message?.trim()) {
    errors.message = "Внеси порака";
  }

  return errors;
};
