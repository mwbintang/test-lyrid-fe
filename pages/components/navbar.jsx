import React from "react";
import { useRouter } from "next/router";

const NavBarCustom = () => {
    const router = useRouter()
  const handleNav = (param) => {
    console.log(param,"paraaaaaaaaam")
    // Use router.push to navigate to the registration page
    if (param == "logout") {
        console.log(param)
    } else {
      router.push(param);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          My Website
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" onClick={() => handleNav("/")}>
              <a className="nav-link">
                Employee Management
              </a>
            </li>
            <li className="nav-item" onClick={() => handleNav("/user-management")}>
              <a className="nav-link">
                User Management
              </a>
            </li>
            <li className="nav-item" onClick={() => handleNav("/edit-profile")}>
              <a className="nav-link">
                Edit Profile
              </a>
            </li>
            <li className="nav-item" onClick={() => handleNav("logout")}>
              <a className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarCustom;
