import { getData } from "../../Nitesh/Actions/allactions";
import { loadData, saveData } from "../../Nitesh/utils/accessLocalStorage";
import {
  AdminLoginError,
  AdminLoginRequest,
  AdminLoginSuccessful,
  userLoginError,
  userLoginRequest,
  userLoginSuccessful,
} from "./actionType";

const initailState = {
  isAuth: false,
  token: loadData("token") || "",
  isLoading: false,
  isError: false,
  admin: loadData("admin") || false,
  user: loadData("user") || false,
};
export const reducer = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userLoginRequest || AdminLoginRequest:
      return { ...state, isLoading: true };
    case userLoginError || AdminLoginError:
      return { ...state, isLoading: false, isError: true };
    case userLoginSuccessful:
     
      saveData("token", payload.uid);
      saveData("user", true);
      return { ...state, isLoading: false, token: payload, user: true };
    case AdminLoginSuccessful:
      saveData("token", payload.uid);
      saveData("admin", true);
      return { ...state, isLoading: false, token: payload, admin: true };
    default:
      return state;
  }
};
