import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import "tailwindcss"
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SideMenu from './components/Sidebar/SideMenu';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <SideMenu/>
        <Routes>
        {/* <AdminDashboard/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
