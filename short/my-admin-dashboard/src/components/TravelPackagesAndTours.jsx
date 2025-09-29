import React from 'react';

const TravelPackagesAndTours = () => {
    return (
        <>
          <li className="menu-item">
          <a  className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-cart" />
            <div data-i18n="Sales">Travel & Packages and Tours</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a  className="menu-link">
                <div data-i18n="New Sale / Invoice">New Sale / Invoice</div>
              </a>
            </li>
            <li className="menu-item">
              <a  className="menu-link">
                <div data-i18n="Sales List">Sales List</div>
              </a>
            </li>
            <li className="menu-item">
              <a  className="menu-link">
                <div data-i18n="Sale Returns">Sale Returns</div>
              </a>
            </li>
          </ul>
        </li>


       </>
    );
};

export default TravelPackagesAndTours;