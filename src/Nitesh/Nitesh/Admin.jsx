import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import List from "../pages/list/List";
import Single from "../pages/single/Single";
import New from "../pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "../formSource";
import "../style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/AuthContext";

function Admin() {
  const { darkMode } = useContext(DarkModeContext);
  const {currentUser}=useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ?children:<Navigate to="/login"/>
  }
  return (
    <div className={darkMode ? "app1 dark" : "app1"}>
      <BrowserRouter>
        <Routes>0
1          <Route path="/">
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
              <Route
                path="new"
                element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Admin;
