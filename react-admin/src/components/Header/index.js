import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Link to={"/"}>
                <img src={logo} className="logo" alt="Logo" />
              </Link>
            </div>
          </div>
          
        </div>
      </header>
    </>
  );
};

export default Header;
