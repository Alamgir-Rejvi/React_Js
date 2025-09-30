import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
import userImg from '../assets/assets/img/avatars/cancan.png'
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d

const Users = () => {
  return (
    <li className="nav-item navbar-dropdown dropdown-user dropdown">
      <a
        className="nav-link dropdown-toggle hide-arrow"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar avatar-online">
          <img
<<<<<<< HEAD
            src="/src/assets/assets/img/avatars/cancan.png"
=======
            src={userImg} // keep this in /public/assets/img/avatars/
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
            alt="User Avatar"
            className="w-px-40 h-auto rounded-circle"
          />
        </div>
      </a>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
<<<<<<< HEAD
          <a className="dropdown-item" href="#">
=======
          <div className="dropdown-item">
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
            <div className="d-flex">
              <div className="flex-shrink-0 me-3">
                <div className="avatar avatar-online">
                  <img
<<<<<<< HEAD
                    src="/src/assets/assets/img/avatars/cancan.png"
=======
                    src={userImg}
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
                    alt="User Avatar"
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
<<<<<<< HEAD
                <span className="fw-semibold d-block">Alamgir Rejvi</span>
                <small className="text-muted">Admin</small>
              </div>
            </div>
          </a>
        </li>
        <li>
          <div className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="bx bx-user me-2" />
            <span className="align-middle">My Profile</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="bx bx-cog me-2" />
            <span className="align-middle">Settings</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
=======
                <span className="fw-semibold d-block">Farhana</span>
                <small className="text-muted">Admin</small>
              </div>
            </div>
          </div>
        </li>

        <li><div className="dropdown-divider" /></li>

        <li>
          <Link to="/profile" className="dropdown-item">
            <i className="bx bx-user me-2" />
            <span className="align-middle">My Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="dropdown-item">
            <i className="bx bx-cog me-2" />
            <span className="align-middle">Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/billing" className="dropdown-item">
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
            <span className="d-flex align-items-center align-middle">
              <i className="flex-shrink-0 bx bx-credit-card me-2" />
              <span className="flex-grow-1 align-middle">Billing</span>
              <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                4
              </span>
            </span>
<<<<<<< HEAD
          </a>
        </li>
        <li>
          <div className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="auth-login-basic.html">
            <i className="bx bx-power-off me-2" />
            <span className="align-middle">Log Out</span>
          </a>
=======
          </Link>
        </li>

        <li><div className="dropdown-divider" /></li>

        <li>
          <Link to="/login" className="dropdown-item">
            <i className="bx bx-power-off me-2" />
            <span className="align-middle">Log Out</span>
          </Link>
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
        </li>
      </ul>
    </li>
  );
};

export default Users;
