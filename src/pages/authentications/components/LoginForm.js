import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../services";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const credentials = new FormData();
    credentials.append("username", username);
    credentials.append("password", password);
    const status = await authService.login(credentials);
    if (!status) {
      setError(true);
    } else {
      setError(false);
      navigate("/");
    }
  };
  return (
    <form onSubmit={submit}>
      <ToastContainer />
      <div className="form-group first">
        <label htmlFor="username">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group last mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-flex mb-5 align-items-center">
        <label className="control control--checkbox mb-0">
          <span className="caption">Remember me</span>
          <input type="checkbox" />
          <div className="control__indicator"></div>
        </label>
        <span className="ml-auto">
          <a href="#" className="forgot-pass underline">
            Forgot Password
          </a>
        </span>
      </div>
      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
          role="alert"
        >
          Username or password is incorrect!
        </div>
      )}
      <button
        className="width-100 bg-primary btn rounded text-xl w-100 text-white"
        id="login-btn"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
