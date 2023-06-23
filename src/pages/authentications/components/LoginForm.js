import React, { useState } from "react";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledLoginBtn, setDisabledLoginBtn] = useState(false);
  const switchRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    toast.success("Login successfully!");
    cookies.set("_token", "token");
    navigate("/");
  };
  return (
    <form onSubmit={submit}>
      <ToastContainer />
      <div className="form-group first">
        <label htmlFor="username">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={inputEmail}
        />
      </div>
      <div className="form-group last mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={inputPassword}
        />
      </div>

      <div className="d-flex mb-5 align-items-center">
        <label className="control control--checkbox mb-0">
          <span className="caption">Remember me</span>
          <input
            type="checkbox"
            checked={rememberMe}
            onClick={switchRememberMe}
          />
          <div className="control__indicator"></div>
        </label>
        <span className="ml-auto">
          <a href="#" className="forgot-pass underline">
            Forgot Password
          </a>
        </span>
      </div>

      <button
        className="width-100 bg-primary btn rounded text-xl w-100 text-white"
        id="login-btn"
        disabled={disabledLoginBtn}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
