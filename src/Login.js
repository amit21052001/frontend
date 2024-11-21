import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-container">
          <div className="login-header">
            <img
              src="../src//assets/insurance-logo.jpg"
              alt="Insurance-Hub Logo"
              className="login-logo"
            />
            <h1>Welcome Back!</h1>
            <p>Login to explore the best insurance plans.</p>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <div className="login-links">
              <a href="/forgot-password">Forgot Password?</a>
              <span> | </span>
              <a href="/signup">Sign Up</a>
            </div>
          </form>
          <footer className="login-footer">
            <a href="/terms">Terms of Service</a> |{" "}
            <a href="/privacy">Privacy Policy</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
