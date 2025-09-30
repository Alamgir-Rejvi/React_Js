<<<<<<< HEAD
import React from 'react';
import avatar from '/src/assets/assets/img/avatars/1.png';

const Navbar = () => {
  return (
    <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="#">
          <i className="bx bx-menu bx-sm" />
        </a>
      </div>
      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0" />
            <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
          </div>
        </div>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item lh-1 me-3">
            <a className="github-button" href="https://github.com/themeselection/sneat-html-admin-template-free" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themeselection/sneat-html-admin-template-free on GitHub">Star</a>
          </li>
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
              <div className="avatar avatar-online">
                <img src={avatar} alt="User" className="w-px-40 h-auto rounded-circle" />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online">
                        <img src={avatar} alt="User" className="w-px-40 h-auto rounded-circle" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-semibold d-block">John Doe</span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              {/* Add other dropdown items */}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
=======
import React, { useState } from "react";
import Users from "./Users"; // আপনার Users component

const SampleNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-wrapper">
      {/* Sidebar */}
      <aside
        id="layout-menu"
        className={`layout-menu menu-vertical bg-menu-theme ${isSidebarOpen ? "show" : ""}`}
        style={{ width: isSidebarOpen ? "250px" : "0", transition: "0.3s" }}
      >
        <div className="menu-header p-3">
          <h4>Sidebar Menu</h4>
        </div>
        <ul className="menu-list p-3">
          <li>Dashboard</li>
          <li>Sales</li>
          <li>Customers</li>
          <li>Reports</li>
        </ul>
      </aside>

      {/* Main content */}
      <div className="layout-container" style={{ marginLeft: isSidebarOpen ? "250px" : "0", transition: "0.3s" }}>
        <nav
          className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
          id="layout-navbar"
        >
          {/* Toggle button */}
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <button
              className="btn btn-primary nav-item nav-link px-0 me-xl-4"
              onClick={toggleSidebar}
            >
              <i className="bx bx-menu bx-sm" />
            </button>
          </div>

          {/* Navbar content */}
          <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            {/* Search */}
            <div className="navbar-nav align-items-center">
              <div className="nav-item d-flex align-items-center">
                <i className="bx bx-search fs-4 lh-0" />
                <input
                  type="text"
                  className="form-control border-0 shadow-none"
                  placeholder="Search..."
                  aria-label="Search..."
                />
              </div>
            </div>

            {/* Right side */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <Users />
            </ul>
          </div>
        </nav>

        {/* Page content */}
        <div className="content p-4">
          <h1>Welcome to Dashboard</h1>
          <p>This is your main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default SampleNavbar;
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
