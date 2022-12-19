// import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Single from "../pages/single/Single";
import New from "../pages/new/New";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { productInputs, userInputs } from "../formSource";
import Styles from "../style/dark.module.css";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import NewProduct from "../pages/new/newProduct";
import ProductList from "../pages/list/productList";
import { useSelector } from "react-redux";
import Homes from "../pages/home/Home";
function Admin() {
  const { darkMode } = useContext(DarkModeContext);
  const user = useSelector((a) => a.AuthReducer.admin);
  // console.log(user);
  // const currentUser  = useContext(false);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };
  return (
    <div className={darkMode ? `${Styles.app1} ${Styles.dark}` : Styles.app1}>
      <Routes>
        <Route path="/"/>
          <Route
            index
            element={
              <RequireAuth>
                <Homes />
              </RequireAuth>
            }
            />
            
          <Route path="users">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path=":userId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={userInputs} title="Add New User" />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <RequireAuth>
                  <ProductList />
                </RequireAuth>
              }
              />
              
            <Route
              path=":productId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
              />
            <Route
              path=":newproduct"
              element={
                <RequireAuth>
                  <NewProduct inputs={productInputs} title="Add New Product" />
                </RequireAuth>
              }
            />
       </Route>
      </Routes> 


    </div>
  );
}

export default Admin;
