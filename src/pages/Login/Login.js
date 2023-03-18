import React, { useState } from "react";
import "./Login.css";
import * as FaIcons from "react-icons/fa";

function Login(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = event.target[0].value;
    const password = event.target[1].value;

    if (user === "krishna" && password === "password") {
      props.getnova(user);
    }
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <div className="login">
        <p className="login-header">
          Login <FaIcons.FaUser className="login-user-icon" />
        </p>
        <form method="post" className="login-form" onSubmit={handleSubmit}>
          <div className="text-field">
            <input
              type="text"
              minLength={7}
              maxLength={7}
              required
              name="nova"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <span></span>
            <label>Nova Id</label>
          </div>
          <div className="text-field">
            <input
              type="password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="forgot">Forgot Password?</div>
          <div className="login-submit-div">
            <input type="submit" value="Go" className="login-submit" />
          </div>
          <div className="signup-link">
            Not a member? <a href="/">signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
