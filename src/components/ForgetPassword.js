import React, { useState } from "react";
import "./ForgetPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending a reset email
    fetch("/api/send-reset-link", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }) 
    })
      .then((response) => {
        if (response.ok) {
          setMessage("A reset link has been sent to your email.");
        } else {
          setMessage("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        setMessage("Error occurred. Please try again later.");
      });
  };

  return (
    <React.Fragment>
    <div className="fp-container">
    <div className="forget-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
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