import React from 'react'
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Login } from '../Components/Login/Login'
// import {AuthContextOTP} from "../Components/Login/AuthContextOTP"
// import {Register} from '../Components/Register/Register'
import { Routes, Route } from "react-router-dom"
import { Home } from '../Componants/Home/Home'
import Login from '../Components/Login'
import Otp from '../Components/Otp/Otp'
import { Register } from '../Components/Register/Register'
import Admin from '../Nitesh/Nitesh/Admin'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/otpPage" element={<Otp />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoute