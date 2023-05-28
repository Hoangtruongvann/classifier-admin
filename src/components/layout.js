import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <section className="relative">
          <div className="wrapper d-flex align-items-stretch">
            <Sidebar />
            <div id="content" className="p-4 p-md-5 pt-5 relative">
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
