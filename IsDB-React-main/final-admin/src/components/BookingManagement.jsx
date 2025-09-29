import React, { useState } from "react";

const BookingManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <li className={`menu-item ${isOpen ? 'open' : ''}`}>
      <a href="#" className="menu-link menu-toggle" onClick={toggleDropdown}>
        <i className="menu-icon tf-icons bx bx-purchase-tag" />
        <div data-i18n="Purchases">Booking Management</div>
      </a>

      {isOpen && (
        <ul className="menu-sub">
          <li className="menu-item">
            <a href="new-purchase.html" className="menu-link">
              <div data-i18n="New Purchase">New Booking</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="purchase-list.html" className="menu-link">
              <div data-i18n="Purchase List">Booking List</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="purchase-returns.html" className="menu-link">
              <div data-i18n="Purchase Returns">Booking Returns</div>
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default BookingManagement;
