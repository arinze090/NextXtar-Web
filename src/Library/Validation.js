export function passwordValidator(inputtxt) {
  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  if (!strongPassword.test(inputtxt)) {
    return false;
  }
  return true;
}

export function checkPassword(password) {
  // Check for at least 1 lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      cause: "Password must contain at least 1 lowercase letter.",
    };
  }

  // Check for at least 1 uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      cause: "Password must contain at least 1 uppercase letter.",
    };
  }

  // Check for at least 1 number
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      cause: "Password must contain at least 1 number.",
    };
  }

  // Check for at least 1 special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    const specialCharacters = '!@#$%^&*(),.?":{}|<>';
    const errorMessage = `Your password must contain at least one special character. Special characters include: ${specialCharacters}`;
    return {
      isValid: false,
      cause: errorMessage,
    };
  }

  // All criteria passed
  return {
    isValid: true,
  };
}

export function passwordValidatorWithoutSpecialCharacters(inputtxt) {
  let strongPassword = new RegExp(/^[A-Za-z0-9 ]+$/);
  if (!strongPassword.test(inputtxt)) {
    return false;
  }
  return true;
}

export const customValidator = (text, lengthy, min) => {
  if (text.length < min || text.length > lengthy) {
    return false;
  }
  return true;
};

export const emailValidator = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (!reg.test(text)) {
    return false;
  }
  return true;
};

export const nameValidator = (text) => {
  let regName = /^[a-zA-Z0-9 ]+$/;
  let boolv = true;
  if (!regName.test(text)) {
    boolv = false;
  } else if (text.length < 2) {
    boolv = false;
  } else if (!text) {
    boolv = false;
  } else {
    boolv = true;
  }
  return boolv;
};

// export const phoneValidator = (text) => {
//   let regName = /^[0-9\+]+$/;
//   let boolv = true;
//   if (!regName.test(text)) {
//     boolv = false;
//   } else if (text?.length < 6) {
//     boolv = false;
//   } else {
//     boolv = true;
//   }
//   return boolv;
// };

export const checkPasswordMatch = (newPassword, confirmPassword) => {
  if (newPassword === confirmPassword) {
    // Passwords match
    return true;
  } else {
    // Passwords do not match
    return false;
  }
};

export function isValidUrl(url) {
  // Regular expression for a simple URL validation
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  return urlRegex.test(url);
}
