import { createContext, useEffect, useReducer } from "react";
import { loadData, saveData } from "../utils/accessLocalStorage";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: loadData("user")||null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    saveData("user",state.currentUser)
  })

  return (
    <AuthContext.Provider value={{currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
