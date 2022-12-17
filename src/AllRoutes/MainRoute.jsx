import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from '../Components/Login/Login'
import {AuthContextOTP} from "../Components/Login/AuthContextOTP"
import {Register} from '../Components/Register/Register'
import { Routes, Route } from "react-router-dom"
import { Home } from "./Componants/Home/Home";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/authContextOTP" element={<AuthContextOTP />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoute