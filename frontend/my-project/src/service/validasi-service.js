const validasiError = (data) => {
  const { name, username, password } = data;
  const errors = {};
  if (name.length < 4) {
    errors.name = "Name must be more than 4 characters.";
  }
  if (username.length < 4) {
    errors.username = "Username must be more than 4 characters.";
  }
  let hasSmall = false;
  let hasBig = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      hasSmall = true;
    } else if (charCode >= 65 && charCode <= 90) {
      hasBig = true;
    } else if (charCode >= 48 && charCode <= 57) {
      hasNumber = true;
    }
  }

  if (!hasSmall || !hasBig || !hasNumber || password.length < 8) {
    errors.password =
      "Password must be more than 8 characters, contain uppercase letters, lowercase letters, and numbers.";
  }
  return errors;
};

export default validasiError;
