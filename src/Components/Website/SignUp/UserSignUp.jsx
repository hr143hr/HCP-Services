import { Link } from 'react-router'
import { useState } from 'react';
import logol1 from '../../../assets/Images/Logos/logol1.png'
import logor1 from '../../../assets/Images/Logos/logor1.png'
import vendarlogo1 from '../../../assets/Images/Logos/Vandarsignlogo2.png'
import Servicelogo1 from '../../../assets/Images/Logos/servicesmanlogo.png'
import './SignUp.css'

const UserSignUp = () => {
  const [usersignup, setUserSignup] = useState({
    username: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserSignup((prev) => ({ ...prev, [name]: value }));
  };

  const handalUserFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log(usersignup); // Log submitted data
    // Reset input fields after submission
    setUserSignup({
      username: "",
       email: ""
    });
  };



  return (
    <section className="user min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center py-4">
              <Link
                to="#"
                className="reg-logo d-flex align-items-center w-auto"
              >
                <img src={logol1} alt="" className="logol1" />
                <span className=""><img src={logor1} alt="" className="logor1" /></span>
              </Link>
            </div>
            {/* End Logo */}
            <div className="user-form mb-3">
              <div className="pb-2">
                <h5 className="card-title text-center pb-0 fs-4">
                  Create an Account
                </h5>
                <p className="text-center small">
                  Enter your personal details to create account
                </p>
              </div>
              <form className="row g-3 needs-validation" onSubmit={handalUserFormSubmit}>
                <div className="col-12">
                  <label htmlFor="yourname" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="yourname"
                    value={usersignup.username}
                    onChange={handleInputChange}

                  />
                  <div className="invalid-feedback">
                    Please, enter your name!
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="youremail" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="youremail"
                    value={usersignup.email}
                    onChange={handleInputChange}

                  />
                  <div className="invalid-feedback">
                    Please enter Link valid Email adddress!
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourPhoneNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    id="yourEmail"

                  />
                  <div className="invalid-feedback">
                    Please enter Link valid Email adddress!
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="terms"
                      type="checkbox"
                      defaultValue=""
                      id="acceptTerms"

                    />
                    <label className="form-check-label" htmlFor="acceptTerms">
                      I agree and accept the{" "}
                      <Link to="#">terms and conditions</Link>
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit">
                    Create Account
                  </button>
                </div>
              </form>
              <div className="col-12 pt-2">
                <p className="small mb-0">
                  Already have an account?{" "}
                  <Link to="/login">Log in</Link>
                </p>
              </div>
              <div className="col-12 pt-1">
                <p className="small mb-0 text-success">
                  Create Link free business account?{" "}
                  {/* <Link to="/login">Create an account</Link> */}
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#createAccountModal"
                    style={{ cursor: "pointer" }}
                  >
                    Create an account
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="createAccountModal"
        tabIndex="-1"
        aria-labelledby="createAccountModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h6>Coose the SignUp Type</h6> */}
              <span>Coose the Acount</span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-center justify-content-start">
                <div data-bs-dismiss="modal">
                  <Link to="/vendor" data-bs-dismiss="modal" >
                    <img src={vendarlogo1} alt="Vendor-Logo" className="modallogo" />
                  </Link>
                </div>
                <div className="ms-4" data-bs-dismiss="modal">
                  <Link to="/vendor" className="btn btn-outline-success">Vendor SignUp!</Link>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end">

                <div className="me-4" data-bs-dismiss="modal" >
                  <Link to="/serviceman" className="btn btn-outline-danger" >Service Man SignUp!</Link>
                </div>
                <div data-bs-dismiss="modal">
                  <Link to="/serviceman">
                    <img src={Servicelogo1} alt="service-Logo" className="modallogo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UserSignUp