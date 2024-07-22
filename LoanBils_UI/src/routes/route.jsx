import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Join/Login";
import Register from "../pages/Join/Register";
import OTP from "../pages/Join/OTP";
import Dashboard from "../pages/User/Dashboard";
import FourZeroFour from "../pages/FourZeroFour/FourZeroFour";
import PrivateRoute from './PrivateRoute';
import { checkTokenExpiration } from '../services/authService';

function FolderRoute() {
  useEffect(() => {
    checkTokenExpiration();
  }, []);
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/verification" element={<OTP />}/>
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="*" element={<FourZeroFour />}/>
        </Routes>
    </>
  )
}

export default FolderRoute