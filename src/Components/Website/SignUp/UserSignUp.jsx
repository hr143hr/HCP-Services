import { Link } from 'react-router'; // Correct import for react-router-dom
import { useState } from 'react';
import axios from 'axios'; // Import Axios

import logol1 from '../../../assets/Images/Logos/logol1.png';
import logor1 from '../../../assets/Images/Logos/logor1.png';

import './SignUp.css';

const UserSignUp = () => {
  const [usersignup, setUserSignup] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserSignup((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!usersignup.username.trim()) {
      newErrors.username = "Name is required.";
    }

    if (!usersignup.email.trim() || !emailRegex.test(usersignup.email)) {
      newErrors.email = "Valid email is required.";
    }

    if (!usersignup.mobile.trim() || !mobileRegex.test(usersignup.mobile)) {
      newErrors.mobile = "Valid 10-digit mobile number is required.";
    }

    if (!usersignup.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (usersignup.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (!usersignup.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (usersignup.password !== usersignup.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!usersignup.terms) {
      newErrors.terms = "You must accept the terms and conditions.";
    }

    return newErrors;
  };

  const handleUserFormSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('/api/Users', {
        username: usersignup.username,
        email: usersignup.email,
        mobile: usersignup.mobile,
        password: usersignup.password,
        confirmPassword: usersignup.confirmPassword,
        terms: usersignup.terms,
      });

      alert('Account created successfully!');
      setUserSignup({
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
      setErrors({});
      console.log(response.data); // Log response if needed
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'An error occurred. Please try again.');
      } else {
        alert('Unable to create account. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="user min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center py-4">
              <Link to="#" className="reg-logo d-flex align-items-center w-auto">
                <img src={logol1} alt="Logo L1" className="logol1" />
                <span>
                  <img src={logor1} alt="Logo R1" className="logor1" />
                </span>
              </Link>
            </div>
            <div className="user-form mb-3">
              <div className="pb-2">
                <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                <p className="text-center small">
                  Enter your personal details to create an account
                </p>
              </div>
              <form className="row g-3 needs-validation" onSubmit={handleUserFormSubmit} noValidate>
                <div className="col-12">
                  <label htmlFor="yourname" className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="yourname"
                    value={usersignup.username}
                    onChange={handleInputChange}
                  />
                  {errors.username && <small className="text-danger">{errors.username}</small>}
                </div>
                <div className="col-12">
                  <label htmlFor="youremail" className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="youremail"
                    value={usersignup.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="col-12">
                  <label htmlFor="yourPhoneNumber" className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    id="yourPhoneNumber"
                    value={usersignup.mobile}
                    onChange={(e) => {
                      const { value } = e.target;
                      if (/^\d*$/.test(value)) {
                        handleInputChange(e);
                      }
                    }}
                    maxLength="10"
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                </div>
                <div className="col-12">
                  <label htmlFor="yourPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="yourPassword"
                    value={usersignup.password}
                    onChange={handleInputChange}
                    maxLength="20"
                  />
                  {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>
                <div className="col-12">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    id="confirmPassword"
                    value={usersignup.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="terms"
                      type="checkbox"
                      id="acceptTerms"
                      checked={usersignup.terms}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="acceptTerms">
                      I agree and accept the <Link to="#">terms and conditions</Link>
                    </label>
                    {errors.terms && <small className="text-danger">{errors.terms}</small>}
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
                    {isLoading ? 'Creating...' : 'Create Account'}
                  </button>
                </div>
              </form>
              <div className="col-12 pt-2">
                <p className="small mb-0">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSignUp;
