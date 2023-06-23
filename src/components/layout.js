import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  useEffect(() => {
    if (!cookies.get("_token")) navigate("/login");
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <section className="relative">
          <div className="wrapper d-flex align-items-stretch">
            <Sidebar />
            <div
              id="content"
              className={
                "p-4 p-md-5 pt-5 relative" +
                (location.pathname === "/" ? " bg-gray-100" : "")
              }
            >
              <div id="loading" hidden>
                <div className="spinner"></div>
              </div>
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
