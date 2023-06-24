import React, { useEffect } from "react";
import { useState } from "react";
import Cookies from "universal-cookie";

const Navbar = () => {
  const cookies = new Cookies();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (cookies.get("_token")) setEmail(cookies.get("email"));
  });
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top d-flex justify-content-between">
        <div className="inline-block">
          <a className="navbar-brand" href="#">
            <i className="fa fa-square-o "></i>&nbsp;Classifier
          </a>
          <button type="button" className="mr-5 ml-3">
            Home
          </button>
          <button type="button" className="mr-5">
            Services
          </button>
          <button type="button" className="mr-5">
            About us
          </button>
          <button type="button" className="mr-5">
            Contact
          </button>
        </div>
        <div className="dropdown mr-5">
          {/* <a className="text-sm" href="/">
                <i className="fa-solid fa-address-card"></i> Hello
                {{ Auth::user()->fullname }}
            </a> */}

          <a className="text-sm" href="/login">
            {email ? "Hello " + email : "Login now!"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
