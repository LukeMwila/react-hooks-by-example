import * as validator from "validator";
import { UserAuth } from "../custom-types";
import { DEFAULT_USER_AUTH, END_POINT } from "./Consts";

/** Handle form validation for the login form
 * @param email - user's auth email
 * @param password - user's auth password
 * @param setError - function that handles updating error state value
 */
export const validateLoginForm = (
  email: string,
  password: string,
  setError: (error: string | null) => void
): boolean => {
  // Check for undefined or empty input fields
  if (!email || !password) {
    setError("Please enter a valid email and password.");
    return false;
  }

  // Validate email
  if (!validator.isEmail(email)) {
    setError("Please enter a valid email address.");
    return false;
  }

  return true;
};

/** Return user auth from local storage value */
export const getStoredUserAuth = (): UserAuth => {
  const auth = window.localStorage.getItem("UserAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return DEFAULT_USER_AUTH;
};

/** Make API request to authenticate user
 * @param email - user's email/username
 * @param password - user's password
 */
export const authenticateUser = (
  email: string,
  password: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(END_POINT, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
