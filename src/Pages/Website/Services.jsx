import React from 'react'
import { Link } from 'react-router'
import newac from '../../assets/Images/NewAc.jpg'
import services from '../../assets/Images/AcServices.jpg'
import acparts from '../../assets/Images/AcParts.jpg'
const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>
            "From expert AC services to new installations and quality AC parts, we’ve got all your cooling needs covered!"
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-5">
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={newac}
                    className="img-fluid"
                    alt="new ac"
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-activity" />
                  </div>
                  <Link to="/newac" className="stretched-link">
                    <h3>New AC</h3>
                  </Link>
                  <p>
                    "Discover the Best Deals on New AC Units Visit Our Website Today!"
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={services}
                    className="img-fluid"
                    alt="AC Services"
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast" />
                  </div>
                  <Link to="#acservices" className="stretched-link">
                    <h3>AC Services</h3>
                  </Link>
                  <p>
                    "The Best Deals, The Best Service Our Expert Technicians Ensure Your AC Runs Like New!"
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={acparts}
                    className="img-fluid"
                    alt="AC Parts"
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-easel" />
                  </div>
                  <Link to="/acaccessories" className="stretched-link">
                    <h3>AC Accessories</h3>
                  </Link>
                  <p>
                    "You can buy premium and original parts from our website."
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}

          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  )
}

export default Services