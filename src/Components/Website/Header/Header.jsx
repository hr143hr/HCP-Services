import { useState } from "react";
import { NavLink, Link } from 'react-router'
import NavLogo from '../../../assets/Images/Logos/logo.png'




const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
  };

  const toggleDropdown = (dropdownName) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${isMobileNavActive ? "mobile-nav-active" : ""
        }`}
    >
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <div className="navlogo">
          <Link
            to="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <img src={NavLogo} alt="Logo" />

          </Link>
        </div>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li className="dropdown">
              <NavLink
                to="/newac" // Base path for the Products dropdown
                className={({ isActive }) =>
                  isActive || window.location.pathname === "/newac" || window.location.pathname === "/acaccessories"
                    ? "active"
                    : ""
                }
                onClick={() => toggleDropdown("mainDropdown")}
              >
                Products <i className="bi bi-chevron-down toggle-dropdown" />
              </NavLink>
              <ul className={`${dropdownStates.mainDropdown ? "show" : ""}`}>
                <li>
                  <NavLink to="newac">New AC</NavLink>
                </li>
                <li>
                  <NavLink to="acaccessories">AC Accessories</NavLink>
                </li>
              </ul>
            </li>

          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? "bi-x" : "bi-list"}`}
            onClick={toggleMobileNav}
          />
        </nav>
        <div className="d-flex align-items-center ">
          <Link className="pe-3" to="#">
            <i className="bi bi-bag-dash fs-2 myicon"></i>
          </Link>

          <Link className="ps-2" to="/login">
            <i className="bi bi-person-circle fs-2 myicon"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
