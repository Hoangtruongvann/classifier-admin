import React from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const cookies = new Cookies();
  const location = useLocation();
  const isRouteMatch = (path) => {
    if (location.pathname.indexOf(path) === 0) return true;
    return false;
  };

  const logout = () => {
    cookies.remove("auth");
  };
  return (
    <nav id="sidebar">
      <div className="custom-menu" id="sidebarCollapse">
        <button type="button" className="btn btn-primary">
          <i className="fa fa-bars"></i>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      <div className="p-4">
        <h1>
          <a className="logo">
            Administrator{" "}
            <span className="text-sm">
              Classify with Ease: Simplifying Data Management for Efficient
              Workflow
            </span>
          </a>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" className="nav-link link-dark" aria-current="page">
              <i className="fa-solid fa-user mr-3"></i>
              Dashboard
            </Link>
          </li>

          <li className={isRouteMatch("/projects") ? "active" : ""}>
            <Link to="/projects" className="nav-link link-dark">
              <i className="fa-solid fa-users mr-3"></i>
              Projects
            </Link>
          </li>
          <li className={isRouteMatch("/users") ? "active" : ""}>
            <Link to="/users" className="nav-link link-dark">
              <i className="fa-solid fa-school mr-3"></i>
              Users
            </Link>
          </li>
          <li className={isRouteMatch("/roles") ? "active" : ""}>
            <Link to="/roles" className="nav-link link-dark">
              <i className="fa-solid fa-school mr-3"></i>
              Roles
            </Link>
          </li>
          <li className={isRouteMatch("/types") ? "active" : ""}>
            <Link to="/types" className="nav-link link-dark">
              <i className="fa-solid fa-users mr-3"></i>
              Project Types
            </Link>
          </li>
          <li className={isRouteMatch("/settings") ? "active" : ""}>
            <Link to="/settings" className="nav-link link-dark">
              <i className="fa-solid fa-file mr-3"></i>
              Profile
            </Link>
          </li>

          <li onClick={logout}>
            <Link to={"/"} className="nav-link link-dark">
              <i className="fa-solid fa-file mr-3"></i>
              Log out
            </Link>
          </li>
        </ul>

        <div className="footer">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | Made{" "}
            <i className="icon-heart" aria-hidden="true"></i>
            by <b>hoangtruongvann</b>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
