const validateEmail = (emailValue: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  let error = "";

  if (emailValue === "") {
    error = "Email cannot be empty";
  } else if (!emailPattern.test(emailValue)) {
    error = "Please enter a valid email address";
  }

  return error;
};

export default validateEmail;
