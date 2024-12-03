import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/HomePage";
import SupportPage from "./components/SupportPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin"  element={<AdminPage />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/support" element={<SupportPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
