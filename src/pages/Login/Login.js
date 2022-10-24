import React from "react";
import "./Login.css";

function Login(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getnova(event.target[0].value);
  };

  return (
    <div className="login-page">
      <div className="login">
        <p className="login-header">Login</p>
        <form method="post" className="login-form" onSubmit={handleSubmit}>
          <div className="text-field">
            <input
              type="text"
              minLength={7}
              maxLength={7}
              required
              name="nova"
            />
            <span></span>
            <label>Nova Id</label>
          </div>
          <div className="text-field">
            <input type="password" required name="password" />
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
