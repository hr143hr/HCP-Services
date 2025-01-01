import React from 'react'
import { Link } from 'react-router'

import aboutphoto from './../../assets/Images/Aboutimage.jpg'
const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>
            Dedicated to Excellence in AC Services Your Comfort is Our Mission!
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up">
          <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay={200}>
            <div className="col-lg-5">
              <div className="about-img">
                <img
                  src={aboutphoto}
                  className="img-fluid"
                  alt="Service man"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h3 className="pt-0 pt-lg-5">
                Neque officiis dolore maiores et exercitationem quae est seda lidera
                pat claero
              </h3>
              {/* Tabs */}
              <ul className="nav nav-pills mb-3">
                <li>
                  <Link
                    className="nav-link active"
                    data-bs-toggle="pill"
                    to="#about-tab1"
                  >
                    New AC
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" data-bs-toggle="pill" to="#about-tab2">
                    AC Services
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" data-bs-toggle="pill" to="#about-tab3">
                    AC Accessories
                  </Link>
                </li>
              </ul>
              {/* End Tabs */}
              {/* Tab Content */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="about-tab1">

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Shop the Best Deals on New AC Units Cool Comfort Starts Here!</h4>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Upgrade Your Space with a New AC Visit Our Site for Exclusive Offers!</h4>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Get the Perfect AC for Your Home Affordable, Efficient, and Ready to Ship!</h4>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Discover Top-Rated AC Units at Unbeatable Prices Buy Now!</h4>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Stay Cool All Year with a New AC Browse Our Selection Online Today!</h4>
                  </div>

                </div>
                {/* End Tab 1 Content */}
                <div className="tab-pane fade" id="about-tab2">

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Fast, Reliable AC Services Book Your Appointment Online Now!</h4>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Need AC Service? Schedule an Appointment with Us in Just a Few Clicks!</h4>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Expert Technicians at Your Service Book Your AC Appointment Today!</h4>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Keep Your AC Running Smoothly Easily Book Your Service Online!</h4>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Your Comfort is a Click Away Book Your AC Service Appointment Now!</h4>
                  </div>

                </div>
                {/* End Tab 2 Content */}
                <div className="tab-pane fade" id="about-tab3">
                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Enhance Your Comfort Browse Our AC Accessories and Shop Online!</h4>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Top-Quality AC Accessories Just a Click Away Order Now!</h4>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Get the Best AC Accessories for Peak Performance Shop Our Site Today!</h4>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Find the Perfect AC Accessories for Your System Order Online with Ease!</h4>
                  </div>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2" />
                    <h4>Upgrade Your AC with Premium Accessories Order Today for Quick Delivery!</h4>
                  </div>

                </div>
                {/* End Tab 3 Content */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  )
}

export default About