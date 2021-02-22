import { Link } from "react-router-dom";

import "../styles/navbar.css";

function Header() {
  return (
    <div>
      <div className="parent">
        <div className="logo-container"></div>

        <div className="nav-container">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/cart" className="link">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
