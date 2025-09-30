import React from 'react';
<<<<<<< HEAD
import DropdownMenu from './DropdownMenu';
import UsersRoles from './UsersRoles';
import Settings from './Settings';
import Users from './Users';
import RevenueCard from './RevenueCard';
import MedicineStatistics from './MedicineStatistics';
import ExpanseOverview from './ExpanseOverview';
import Transactions from './Transaction';
import TravelPackages from './TravelPackages';
import BookingManagement from './BookingManagement';
import PaymentFinance from './PaymentFinance';
import CustomersSupport from './CustomersSupport';
import ReviewFeedback from './ReviewFeedback';
import ReportsAnalytics from './ReportsAnalytics';

const Layout = () => {
    return (
        <>
        {/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar">
  <div className="layout-container">
    {/* Menu */}
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo">
          {/* <i class="fa-solid fa-plane-departure"></i> */}
          </span>
          <span className="app-brand-text demo menu-text fw-bolder text-uppercase">Travel Panel</span>
        </a>
        <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li className="menu-item active">
          <a href="index.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics">Dashboard</div>
          </a>
        </li>

        {/* <DropdownMenu/> */}
        <UsersRoles/>
        <TravelPackages/>
        <BookingManagement/>
        {/* <Stock/> */}
        <PaymentFinance/>
        <CustomersSupport/>
        <ReviewFeedback/>
        <ReportsAnalytics/>
        <Settings/>

      </ul>
    </aside>
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
      <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i className="bx bx-menu bx-sm" />
          </a>
        </div>
        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          {/* Search */}
          <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
              <i className="bx bx-search fs-4 lh-0" />
              <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
            </div>
          </div>
          {/* /Search */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* Place this tag where you want the button to render. */}
           
            {/* User */}
            <Users/>
            {/*/ User */}
          </ul>
        </div>
      </nav>
      {/* / Navbar */}
      {/* Content wrapper */}
      <div className="content-wrapper">
        {/* Content */}
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            {/* <div className="col-lg-8 mb-4 order-0">
              <div className="card">
                <div className="d-flex align-items-end row">
                  <div className="col-sm-7">
                    <div className="card-body">
                      <h5 className="card-title text-primary">Congratulations Almgir Rejvi! 🎉</h5>
                      <p className="mb-4">
                        You have done <span className="fw-bold">72%</span> task  today. Check your new badge in
                        your profile.
                      </p>
                      <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
                    </div>
                  </div>
                  <div className="col-sm-5 text-center text-sm-left">
                    <div className="card-body pb-0 px-0 px-md-4">
                      <img src="/src/assets/assets/img/illustrations/man-with-laptop-light.png" height={140} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


            {/* <div className="col-lg-4 col-md-4 order-1">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img src="/src/assets/assets/img/icons/unicons/chart-success.png" alt="chart success" className="rounded" />
                        </div>
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                            <a className="dropdown-item" href="javascript:void(0);">View More</a>
                            <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span className="fw-semibold d-block mb-1">Total Booking</span>
                      <h3 className="card-title mb-2">128</h3>
                      <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +72.80%</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img src="/src/assets/assets/img/icons/unicons/wallet-info.png" alt="Credit Card" className="rounded" />
                        </div>
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                            <a className="dropdown-item" href="javascript:void(0);">View More</a>
                            <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span>Total Customers</span>
                      <h3 className="card-title text-nowrap mb-1">679</h3>
                      <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 order-1">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img src="/src/assets/assets/img/icons/unicons/chart-success.png" alt="chart success" className="rounded" />
                        </div>
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                            <a className="dropdown-item" href="javascript:void(0);">View More</a>
                            <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span className="fw-semibold d-block mb-1">Total Booking</span>
                      <h3 className="card-title mb-2">128</h3>
                      <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +72.80%</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img src="/src/assets/assets/img/icons/unicons/wallet-info.png" alt="Credit Card" className="rounded" />
                        </div>
                        <div className="dropdown">
                          <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                            <a className="dropdown-item" href="javascript:void(0);">View More</a>
                            <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                          </div>
                        </div>
                      </div>
                      <span>Total Customers</span>
                      <h3 className="card-title text-nowrap mb-1">679</h3>
                      <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


<div className="row">
      {/* Card 1 */}
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex align-items-start justify-content-between">
              <div className="avatar flex-shrink-0">
                <img
                  src="/src/assets/assets/img/icons/unicons/chart-success.png"
                  alt="chart success"
                  className="rounded"
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="cardOpt1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt1">
                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                </div>
              </div>
            </div>
            <span className="fw-semibold d-block mb-1">Total Booking</span>
            <h3 className="card-title mb-2">128</h3>
            <small className="text-success fw-semibold">
              <i className="bx bx-up-arrow-alt" /> +72.80%
            </small>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex align-items-start justify-content-between">
              <div className="avatar flex-shrink-0">
                <img
                  src="/src/assets/assets/img/icons/unicons/wallet-info.png"
                  alt="Credit Card"
                  className="rounded"
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="cardOpt2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt2">
                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                </div>
              </div>
            </div>
            <span>Total Customers</span>
            <h3 className="card-title text-nowrap mb-1">679</h3>
            <small className="text-success fw-semibold">
              <i className="bx bx-up-arrow-alt" /> +28.42%
            </small>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex align-items-start justify-content-between">
              <div className="avatar flex-shrink-0">
                <img
                  src="/src/assets/assets/img/icons/unicons/chart-success.png"
                  alt="chart success"
                  className="rounded"
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="cardOpt3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                </div>
              </div>
            </div>
            <span className="fw-semibold d-block mb-1">Active Packages</span>
            <h3 className="card-title mb-2">45</h3>
            <small className="text-success fw-semibold">
              <i className="bx bx-up-arrow-alt" /> +10.20%
            </small>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex align-items-start justify-content-between">
              <div className="avatar flex-shrink-0">
                <img
                  src="/src/assets/assets/img/icons/unicons/wallet-info.png"
                  alt="Credit Card"
                  className="rounded"
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="cardOpt4"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                </div>
              </div>
            </div>
            <span>Upcoming Trips</span>
            <h3 className="card-title text-nowrap mb-1">5</h3>
            <small className="text-success fw-semibold">
              <i className="bx bx-up-arrow-alt" /> +5.12%
            </small>
          </div>
        </div>
      </div>
    </div>


            

    <div className="row">
      {/* Card 1 */}
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex align-items-start justify-content-between">
              <div className="avatar flex-shrink-0">
                <img
                  src="/src/assets/assets/img/icons/unicons/chart-success.png"
                  alt="chart success"
                  className="rounded"
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="cardOpt1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt1">
                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                </div>
              </div>
            </div>
            <span className="fw-semibold d-block mb-1">Total Booking</span>
            <h3 className="card-title mb-2">128</h3>
            <small className="text-success fw-semibold">
              <i className="bx bx-up-arrow-alt" /> +72.80%
            </small>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex align-items-start justify-content-between">
              <div className="avatar flex-shrink-0">
                <img
                  src="/src/assets/assets/img/icons/unicons/wallet-info.png"
                  alt="Credit Card"
                  className="rounded"
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="cardOpt2"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt2">
                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                </div>
              </div>
            </div>
            <span>Total Customers</span>
            <h3 className="card-title text-nowrap mb-1">679</h3>
            <small className="text-success fw-semibold">
              <i className="bx bx-up-arrow-alt" /> +28.42%
            </small>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex align-items-start justify-content-between">
              <div className="avatar flex-shrink-0">
                <img
                  src="/src/assets/assets/img/icons/unicons/chart-success.png"
                  alt="chart success"
                  className="rounded"
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="cardOpt3"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                </div>
              </div>
            </div>
            <span className="fw-semibold d-block mb-1">Active Packages</span>
            <h3 className="card-title mb-2">45</h3>
            <small className="text-success fw-semibold">
              <i className="bx bx-up-arrow-alt" /> +10.20%
            </small>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title d-flex align-items-start justify-content-between">
              <div className="avatar flex-shrink-0">
                <img
                  src="/src/assets/assets/img/icons/unicons/wallet-info.png"
                  alt="Credit Card"
                  className="rounded"
                />
              </div>
              <div className="dropdown">
                <button
                  className="btn p-0"
                  type="button"
                  id="cardOpt4"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-vertical-rounded" />
                </button>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                  <a className="dropdown-item" href="javascript:void(0);">View More</a>
                  <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                </div>
              </div>
            </div>
            <span>Upcoming Trips</span>
            <h3 className="card-title text-nowrap mb-1">5</h3>
            <small className="text-success fw-semibold">
              <i className="bx bx-up-arrow-alt" /> +5.12%
            </small>
          </div>
        </div>
      </div>
    </div>    
  </div>

          <RevenueCard/>
          <div className="row">
            {/* Order Statistics */}
            <MedicineStatistics/>
            {/*/ Order Statistics */}
            {/* Expense Overview */}
            <ExpanseOverview/>
            {/*/ Expense Overview */}
            {/* Transactions */}
            <Transactions/>
            {/*/ Transactions */}
          </div>
        </div>
        {/* / Content */}
        {/* Footer */}
        <footer className="content-footer footer bg-footer-theme">
          <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
            <div className="mb-2 mb-md-0">
              © made with ❤️ by 
              <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder"> &nbsp; Farhana</a>
            </div>
            <div>
              {/* <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
              <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>
              <a href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
              <a href="https://github.com/themeselection/sneat-html-admin-template-free/issues" target="_blank" className="footer-link me-4">Support</a> */}
            </div>
          </div>
        </footer>
        {/* / Footer */}
        <div className="content-backdrop fade" />
      </div>
      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle" />
</div>
{/* / Layout wrapper */}


        </>
    );
};

export default Layout;
=======
import { Link, Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Sales from './Sales';
import Purchases from './Purchase';
import Stock from './Stock';
import Finance from './Finance';
import Customers from './Customers';
import Suppliers from './Suppliers';
import UsersRoles from './UsersRoles';
import Reports from './Reports';
import Settings from './Settings';

const Layout = () => {
  return (
    <>
      {/* Layout wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Sidebar Menu */}
          <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
              <Link to="/" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <i className="fa-solid fa-tablets fs-1"></i>
                </span>
                <span className="app-brand-text demo menu-text fw-bolder text-uppercase ms-2">Pharma</span>
              </Link>
              <a
                href="#"
                className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
              >
                <i className="bx bx-chevron-left bx-sm align-middle" />
              </a>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
              {/* Dashboard */}
              <li className="menu-item active">
                <Link to="/" className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle" />
                  <div>Dashboard</div>
                </Link>
              </li>

              {/* Sidebar Dropdowns */}
              <Sales/>
              <Purchases/>
              <Stock/>
              <Finance/>
              <Customers/>
              <Suppliers/>
              <UsersRoles/>
              <Reports/>
              <Settings/>

            </ul>
          </aside>
          {/* / Sidebar Menu */}

          {/* Layout container */}
          <div className="layout-page">
            {/* Navbar */}
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" href="#">
                  <i className="bx bx-menu bx-sm" />
                </a>
              </div>
              {/* Navbar component */}
              <Navbar />
            </nav>
            {/* / Navbar */}

            {/* Main Content */}
            <div className="ms-4 mt-4">
              {/* main container starts here */}

              {/* main container ends here */}



              {/* <Outlet /> */}
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="layout-overlay layout-menu-toggle" />
      </div>
      {/* / Layout wrapper */}
    </>
  );
};

export default Layout;
>>>>>>> 656126930037ac52bbc7d3417aba52852e2c205d
