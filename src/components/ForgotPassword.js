import React, { useState } from "react";
import "./ForgotPassword.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email has been sent. Please check your inbox.");
      setMessage("Password reset email sent. Check your inbox!");
    } catch (error) {
      // Check for specific errors
      if (error.code === "auth/user-not-found") {
        setMessage("Email address is not registered.");
      } else {
        setMessage(error.message);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="fp-container">
        <div className="forget-password">
          <h2>Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <div className="form-group">
              <label htmlFor="email">Enter your email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Send Reset Link</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
