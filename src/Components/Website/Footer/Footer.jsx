import React from 'react'
import { Link } from 'react-router'
const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link to="/" className="logo d-flex align-items-center">
                <span className="sitename">HCP ELECTRONICS</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>A-8, Someshvar Tenament, </p>
                <p>Niraynagar Road, Ranip, Ahmedabad.</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+91 8849696356</span>, <span>+91 9979775742</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>hcpenterprise@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="#">Products</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="/newac">Buy New AC</Link>
                </li>
                <li>
                  <Link to="#">Book AC Services</Link>
                </li>
                <li>
                  <Link to="/acaccessories">Buy AC Accessories</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div>
            © Copyright{" "}
            <strong>
              <span>HCP</span>
            </strong>
            . All Rights Reserved
          </div>

          <div className="d-flex flex-column align-items-center align-items-lg-center">
            <div className="credits">

              Designed by <Link to="http://http://dyinfosoft.com/.com/" target="_blanck">DY Infosoft</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>

  )
}

export default Footer