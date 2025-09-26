import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center">
            <div className="col-3 part1">
              <Link to={"/"} className="d-flex align-items-center">
                <img src={logo} className="logo" alt="Logo" />
                <span className="ml-2 display-4 text-light text-decoration-none">TravelZone</span>
              </Link>
            </div>

            <div className="col-3 d-flex align-items-center part2">
              <Button className="rounded-circle ml-4 mr-3"><MdMenuOpen /></Button>
           
              <SearchBox/>
            </div>
          </div>
          
        </div>
      </header>
    </>
  );
};

export default Header;
