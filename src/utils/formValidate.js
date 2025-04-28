export const Validation = (email, password) => {
    // const isNameValid = /^[a-zA-Z ]{3,}$/.test(name); // allowing space too (e.g., "John Doe")
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/.test(password);
  
    // if (!isNameValid) return "Invalid name. Min 3 characters";
    if (!isEmailValid) return "Invalid email. Try again";
    if (!isPasswordValid)
      return "Invalid password. Must be 8+ chars, 1 upper, 1 lower, 1 digit, 1 special";
  
    return null;
  };
  