import React from "react";

const PaymentAndFinance = () => {
  return (
    <>
      <li className="menu-item">
        <a className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-wallet" />
          <div data-i18n="Finance">Payment And Finance</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Revenue">Revenue</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Expenses">Expenses</div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link">
              <div data-i18n="Profit Reports">Profit Reports</div>
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default PaymentAndFinance;
