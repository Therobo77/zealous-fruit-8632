import React from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Login } from '../Components/Login/Login'
// import {AuthContextOTP} from "../Components/Login/AuthContextOTP"
// import {Register} from '../Components/Register/Register'
import { Routes, Route } from "react-router-dom";
import { Home } from "../Componants/Home/Home";
import Login from "../Components/Login";
import Otp from "../Components/Otp/Otp";
import { Register } from "../Components/Register/Register";
import Admin from "../Nitesh/Nitesh/Admin";
import List from "../Nitesh/pages/list/List";
import ProductList from "../Nitesh/pages/list/productList";
// import { Home } from "./Componants/Home/Home";

const MainRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/otpPage" element={<Otp />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/users" element={<List />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
