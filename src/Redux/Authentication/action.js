import {
  AdminLoginError,
  AdminLoginRequest,
  AdminLoginSuccessful,
  userLoginError,
  userLoginRequest,
  userLoginSuccessful,
} from "./actionType";

export const userRequest = () => {
  return { type: userLoginRequest };
};
export const userSuccessful = (payload) => {
  return { type: userLoginSuccessful, payload };
};
export const userError = () => {
  return { type: userLoginError };
};

export const adminRequest = () => {
  return { type: AdminLoginRequest };
};
export const adminSuccessful = (payload) => {
  return { type: AdminLoginSuccessful, payload };
};
export const adminError = () => {
  return { type: AdminLoginError };
};
