import React from 'react'
import { Link } from 'react-router'
import Heroimg from './../../assets/Images/HeroImage.png'
import Slider1 from '../../assets/Images/Slider1.png'
import Slider2 from '../../assets/Images/Slider2.png'
// import Heroicon1 from '../../assets/Images/HeroIcon1.png'
// import Heroicon2 from '../../assets/Images/HeroIcon2.png'
// import Heroicon3 from '../../assets/Images/HeroIcon3.png'
// import Heroicon4 from '../../assets/Images/HeroIcon4.png'
import VisitStore from '../../assets/Images/VisitStore.jpg'
import teamwork from '../../assets/Images/TeamWork.jpg'
import teamwork1 from '../../assets/Images/TeamWork2.jpg'


const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content" data-aos="fade-up" data-aos-delay={200}>
                  <div className="company-badge mb-4">
                    <i className="bi bi-gear-fill me-2 rotating-gear" />
                    Conditioning Experts.
                  </div>
                  <h1 className="mb-4">
                    Air control <br />
                    innovations <br />
                    <span className="accent-text">Climate Solutions</span>
                  </h1>
                  {/* <p className="mb-4 mb-md-5">
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
            magna.
          </p> */}
                  <div className="hero-buttons">
                    <a href="#about" className="btn btn-primary me-0 me-sm-2 mx-1">
                      Buy Now!
                    </a>
                    <a href="#about" className="btn btn-warning  me-0 me-sm-2 mx-1">
                      Book Now!
                    </a>
                    {/* <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="btn btn-link mt-2 mt-sm-0 glightbox"
            >
              <i className="bi bi-play-circle me-1" />
              Play Video
            </a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image" data-aos="zoom-out" data-aos-delay={300}>
                  <img
                    src={Heroimg}
                    alt="Hero Image"
                    className="img-fluid"
                  />
                  <div className="customers-badge">
                    <div
                      id="carouselExampleAutoplaying"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={Slider1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src={Slider2} className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row stats-row gy-4 mt-5"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bi bi-trophy" />
                  </div>
                  <div className="stat-content">
                    <h4>3x Won Awards</h4>
                    <p className="mb-0">Vestibulum ante ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bi bi-briefcase" />
                  </div>
                  <div className="stat-content">
                    <h4>6.5k Faucibus</h4>
                    <p className="mb-0">Nullam quis ante</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bi bi-graph-up" />
                  </div>
                  <div className="stat-content">
                    <h4>80k Mauris</h4>
                    <p className="mb-0">Etiam sit amet orci</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bi bi-award" />
                  </div>
                  <div className="stat-content">
                    <h4>6x Phasellus</h4>
                    <p className="mb-0">Vestibulum ante ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Hero Section */}

        {/* Featured Services Section */}

        {/* /Featured Services Section */}



        {/* Clients Section */}

        {/* /Clients Section */}



        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section">
          <div className="container" data-aos="zoom-out">
            <div className="row g-5">
              <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
                <p>Premium quality</p>
                <h3>
                  {/* Alias sunt quas <em>Cupiditate</em> oluptas hic minima */}
                  Air conditioning & Ventilation
                </h3>
                <p>
                  Efficient air conditioning and ventilation ensure optimal indoor comfort, fresh air circulation, and energy savings, enhancing your living or work environment.
                </p>
                <a className="cta-btn align-self-start" href="#">
                  Welcome to Our Store
                </a>
              </div>
              <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
                <div className="img">
                  <img src={VisitStore} alt="Our Store" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Call To Action Section */}

        {/* Onfocus Section */}
        <section id="onfocus" className="onfocus section dark-background ">
          <div className="container-fluid p-0" data-aos="fade-up">
            <div className="row g-0">
              <div className="col-lg-6 video-play position-relative">
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox pulsating-play-btn"
                />
              </div>
              <div className="col-lg-6">
                <div className="content d-flex flex-column justify-content-center h-100">
                  <h3>Let's grow together</h3>
                  <p className="fst-italic">
                    Join our business and let’s grow together, creating shared success through collaboration, innovation, and endless opportunities.
                  </p>
                  <ul >
                    <li>
                      <div className="d-flex"><i className="bi bi-check-circle me-2" /><p>Provide the latest and most advanced electronic products to meet evolving customer needs.</p></div>
                    </li>
                    <li>
                      <div className="d-flex"><i className="bi bi-check-circle me-2" /><p>Deliver exceptional service and personalized solutions for a seamless shopping experience.</p></div>
                    </li>
                    <li>
                      <div className="d-flex"><i className="bi bi-check-circle me-2" /><p>Promote eco-friendly technologies and practices to contribute to a greener future.</p></div>
                    </li>
                    <li>
                      <div className="d-flex"><i className="bi bi-check-circle me-2" /><p>Offer competitive pricing without compromising on quality or reliability.</p></div>
                    </li>
                    <li>
                      <div className="d-flex"><i className="bi bi-check-circle me-2" /><p>Build lasting relationships through transparency, trust, and consistent excellence in every interaction.</p></div>
                    </li>
                  </ul>
                  {/* <a href="#" className="read-more align-self-start">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Onfocus Section */}

        {/* Features Section */}

        {/* /Features Section */}

        {/* Portfolio Section */}

        {/* /Portfolio Section */}







      </main >

    </>
  )
}

export default Home