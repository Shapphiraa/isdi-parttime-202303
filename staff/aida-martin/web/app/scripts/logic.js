import { validateEmail, validateName, validatePassword } from "./validators.js";
import { users } from "./data.js";

export function registerUser(name, email, password, repeatPassword) {
  validateName(name);
  validateEmail(email);
  validatePassword(password);

  let foundUser = findUserByEmail(email);

  if (foundUser)
    throw new Error("You are already registered! Please login! 😅");

  if (password !== repeatPassword) throw new Error("Passwords do not match 😥");

  users.push({
    name: name,
    email: email,
    password: password,
  });
}

export function authenticateUser(email, password) {
  validateEmail(email);
  validatePassword(password);

  let foundUser = findUserByEmail(email);

  if (!foundUser) throw new Error("User not found 😥");

  if (foundUser.password !== password) {
    throw new Error("Wrong password 😥");
  }
}

export function retrieveUser(email) {
  validateEmail(email);

  let foundUser = findUserByEmail(email);

  if (!foundUser) throw new Error("User not found 😥");

  let user = {
    name: foundUser.name,
    email: foundUser.email,
    avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
  };

  return user;
}

export function changePassword(
  email,
  password,
  newPassword,
  newPasswordConfirm
) {
  validateEmail(email);
  validatePassword(password);
  validatePassword(newPassword, "New password");
  validatePassword(password);

  let foundUser = findUserByEmail(email);

  if (!foundUser) throw new Error("User not found 😥");
  if (password !== foundUser.password) throw new Error("Wrong password 😥");
  if (newPassword !== newPasswordConfirm)
    throw new Error("New passwords do not match 😥");
  if (newPassword === password)
    throw new Error("Your new password matches the current one 😥");
  if (!newPasswordConfirm.length)
    throw new Error("You have not confirm your new password 😥");
  if (newPassword.length < 8)
    throw new Error("Your password does not have 8 characters 😥");

  foundUser.password = newPassword;
}

export function updateAvatar(email, avatar) {
  validateEmail(email);

  let foundUser = findUserByEmail(email);

  foundUser.avatar = avatar;
}

// helpers

function findUserByEmail(email) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.email === email) {
      return user;
    }
  }
}
