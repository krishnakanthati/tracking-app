import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login">
        <p className="login-header">Login</p>
        <form method="post" className="login-form">
          <div className="text-field">
            <input type="text" min="7" max="7" required />
            <span></span>
            <label>Nova Id</label>
          </div>
          <div className="text-field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="forgot">Forgot Password?</div>
          <input type="submit" value="Login" className="login-submit" />
          <div className="signup-link">
            Not a member? <a href="/">signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
