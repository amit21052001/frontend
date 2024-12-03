import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true); // Start loading indicator

    try {
      // Make API call to the login endpoint
      const response = await axios.post("http://localhost:5000/api/v1/auth/login", {
        email,
        password,
      });

      // Handle successful login
      if (response.data.token) {
        // Save token to localStorage
        localStorage.setItem("authToken", response.data.token);

        // Redirect to the home page
        navigate("/home");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      // Handle errors
      setError(
        err.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-container">
          <div className="login-header">
            <img
              src="../src/assets/insurance-logo.jpg"
              alt="Insurance-Hub Logo"
              className="login-logo"
            />
            <h1>Welcome Back!</h1>
            <p>Login to explore the best insurance plans.</p>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            {error && <p className="error-message">{error}</p>} {/* Error Message */}
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
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
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
