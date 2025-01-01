import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Need help? Just fill out the form!
          </p>
        </div>
        {/* End Section Title */}

        {/* End Google Maps */}
        <div className="container" data-aos="fade">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-4">
              <div className="info">
                <h3>Get in touch</h3>
                <p>
                  "Stay cool and comfortable with our expert AC services! Get in touch today your comfort is just a call or message away!"
                </p>
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h4>Location:</h4>
                    <p>A-8, Someshvar Tenament, Niraynagar Road, Ranip, Ahmedabad.</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h4>Email:</h4>
                    <p>hcpenterprise@gmail.com</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0" />
                  <div>
                    <h4>Call:</h4>
                    <p>+91 8849696356</p>
                    <p>+91 9979775742</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>
            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>

                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </>

  )
}

export default Contact