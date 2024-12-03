// import React, { useState } from "react";
// import "./ForgotPassword.css";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//     // Implement API call for password reset here
//     console.log("Password reset link sent to:", email);
//   };

//   return (
//     <div>
//         <div className="forgot-password-container">
//       <form onSubmit={handleForgotPassword} className="forgot-password-form">
//         <h2>Forgot Password</h2>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <button type="submit" className="forgot-password-button">
//           Send Reset Link
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Simulate API call to check if the email exists
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const validEmails = ["user@example.com", "test@example.com"]; // Example data
          if (validEmails.includes(email)) {
            resolve({ exists: true });
          } else {
            reject({ error: "User does not exist. Please check the email." });
          }
        }, 1000);
      });

      if (response.exists) {
        setEmailValid(true);
        setSuccessMessage("Email is valid. Please enter a new password.");
      }
    } catch (err) {
      setErrorMessage(err.error || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Simulate API call to update the password
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
      setSuccessMessage("Password has been updated successfully!");
      setPassword("");
      setEmail("");
      setEmailValid(false);
    } catch (err) {
      setErrorMessage("Failed to update the password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="forgot-password-container">
        <form
          onSubmit={emailValid ? handleUpdatePassword : handleCheckEmail}
          className="forgot-password-form"
        >
          <h2>Forgot Password</h2>
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {!emailValid && (
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          )}

          {emailValid && (
            <div className="form-group">
              <label>New Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your new password"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="forgot-password-button"
            disabled={loading}
          >
            {loading ? "Processing..." : emailValid ? "Update Password" : "Check Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
