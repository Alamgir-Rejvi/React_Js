import React, { useState } from "react";
<<<<<<< HEAD
import 'bootstrap'
const UsersRoles = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
=======
import { Link } from "react-router-dom";

const UsersRoles = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = e => {
    e.preventDefault(); // prevent "#" reload
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
<<<<<<< HEAD
      <a href="#" className="menu-link menu-toggle d-flex align-items-center" onClick={toggleDropdown}>
        <i class="fa-solid fa-users"></i>
        <div className="ms-3" data-i18n="Users & Roles">Users & Roles</div>
=======
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-shield" />
        <div data-i18n="Users & Roles">Users & Roles</div>
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
<<<<<<< HEAD
            <a href="user-management.html" className="menu-link">
              <div data-i18n="User Management">User Management</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="roles-permissions.html" className="menu-link">
              <div data-i18n="Roles & Permissions">Roles & Permissions</div>
            </a>
=======
            <Link to="/user-management" className="menu-link">
              <div data-i18n="User Management">User Management</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/roles-permissions" className="menu-link">
              <div data-i18n="Roles & Permissions">Roles & Permissions</div>
            </Link>
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
          </li>
        </ul>
      )}
    </li>
  );
};

export default UsersRoles;
