import React from "react";
import "./Login.css"; // Gunakan file CSS terpisah jika perlu

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account? <a href="#register">Register</a>
          </p>
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me?</label>
        </div>
      </div>
    </div>
  );
}

export default Login;
