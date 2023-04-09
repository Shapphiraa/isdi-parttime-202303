import { validateId, validatePassword } from "./helpers/validators.js";
import { findUserById } from "./helpers/data-managers.js";

export default function changePassword(
  userId,
  password,
  newPassword,
  newPasswordConfirm
) {
  validateId(userId, "User ID");
  validatePassword(password);
  validatePassword(newPassword, "New password");
  validatePassword(password);

  let foundUser = findUserById(userId);

  if (!foundUser) throw new Error("User not found 😥", { cause: "userError" });
  if (password !== foundUser.password)
    throw new Error("Wrong password 😥", { cause: "userError" });
  if (newPassword !== newPasswordConfirm)
    throw new Error("New passwords do not match 😥", { cause: "userError" });
  if (newPassword === password)
    throw new Error("Your new password matches the current one 😥", {
      cause: "userError",
    });
  if (!newPasswordConfirm.length)
    throw new Error("You have not confirm your new password 😥", {
      cause: "userError",
    });
  if (newPassword.length < 8)
    throw new Error("Your password does not have 8 characters 😥", {
      cause: "userError",
    });

  foundUser.password = newPassword;
}
