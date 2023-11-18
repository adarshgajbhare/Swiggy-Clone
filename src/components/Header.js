import logo from "../utils/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="nav-item">
        <ul>
          <li className="logo-image">
            {" "}
            <img src={logo} alt="" />
          </li>
          <li className="nav-links">Search</li>
          <li className="nav-links">Home</li>
          <li className="nav-links">About</li>
          <li className="nav-links">
            <span role="img" aria-label="Cart">
              🛒
            </span>
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
