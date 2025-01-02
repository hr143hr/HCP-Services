import { useState } from "react";
import { NavLink, Link } from "react-router";
import NavLogo from "../../../assets/Images/Logos/logo.png";

const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);

    // Reset dropdown states when closing mobile navigation
    if (isMobileNavActive) {
      setDropdownStates({});
    }
  };

  const toggleDropdown = (dropdownName) => {
    if (isMobileNavActive) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${isMobileNavActive ? "mobile-nav-active" : ""
        }`}
    >
      <div className="container-fluid container-xxl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto navlogo">
          <img src={NavLogo} alt="Logo" />
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink to="/" onClick={toggleMobileNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about" onClick={toggleMobileNav}>About</NavLink>
            </li>
            <li>
              <NavLink to="services" onClick={toggleMobileNav}>Services</NavLink>
            </li>
            <li>
              <NavLink to="contact" onClick={toggleMobileNav}>Contact</NavLink>
            </li>
            <li className="dropdown">
              <Link to="#" className={`${dropdownStates.mainDropdown ? "active" : ""}`} onClick={() => toggleDropdown("mainDropdown")}>
                Products <i className="bi bi-chevron-down toggle-dropdown" />
              </Link>
              <ul className={`${dropdownStates.mainDropdown ? "dropdown-active" : ""}`}>
                <li>
                  <NavLink to="newac" onClick={toggleMobileNav}>New AC</NavLink>
                </li>
                <li>
                  <NavLink to="acaccessories" onClick={toggleMobileNav}>AC Accessories</NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? "bi-x" : "bi-list"
              }`}
            onClick={toggleMobileNav}
          />
        </nav>
        <div className="btn-login">
          <Link to="#" className="me-4">
            <i className="bi bi-bag-dash fs-2 myicon"></i>
          </Link>
          <Link className="" to="/login">
            <i className="bi bi-person-circle fs-2 myicon"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
