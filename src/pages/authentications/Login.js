import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Navbar from "../../components/navbar";

import LoginForm from "./components/LoginForm";

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.get("_token")) navigate("/");
  });
  return (
    <div>
      <Navbar />
      <div className="content mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="img/undraw_remotely_2j6y.svg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <div className="text-3xl">Sign In</div>
                    <p className="mb-4 mt-1">
                      Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                      consectetur adipisicing.
                    </p>
                  </div>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
