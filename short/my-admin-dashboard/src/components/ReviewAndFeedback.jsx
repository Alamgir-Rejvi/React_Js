import React from "react";

const ReviewAndFeedback = () => {
  return (
    <>
      <li className="menu-item">
        <a className="menu-link menu-toggle">
          <i className="fa-solid fa-users me-3"></i>
          <div data-i18n="Suppliers">Review & Feedback</div>
        </a>

        <ul className="menu-sub dropdown">
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Supplier List">Supplier List</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Add Supplier">Add Supplier</div>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default ReviewAndFeedback;
