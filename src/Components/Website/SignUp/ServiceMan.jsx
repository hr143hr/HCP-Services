import { useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import logol1 from '../../../assets/Images/Logos/logol1.png';
import logor1 from '../../../assets/Images/Logos/logor1.png';
import './SignUp.css';

const ServiceMan = () => {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      dob: '',
      contactNumber: '',
      email: '',
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      password: '',
   
      termsAccepted: false
   });

   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
         ...prevState,
         [name]: value
      }));
   };

   const validate = () => {
      const newErrors = {};

      // Check if required fields are empty
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.dob) newErrors.dob = 'Date of birth is required';
      if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.streetAddress) newErrors.streetAddress = 'Street address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
      if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
      if (!formData.password) newErrors.password = 'Password is required';
      if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';

      // Email format validation
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (formData.email && !emailPattern.test(formData.email)) {
         newErrors.email = 'Please enter a valid email address';
      }

      // Contact number validation (only numbers, format: (000) 000-0000)
      const phonePattern = /^[0-9]{3}[0-9]{3}[0-9]{4}$/; // Accept only numbers
      if (formData.contactNumber && !phonePattern.test(formData.contactNumber)) {
         newErrors.contactNumber = 'Please enter a valid contact number (only digits, e.g., 1234567890)';
      }

      // Date of birth validation (cannot be a future date)
      const dob = new Date(formData.dob);
      const today = new Date();
      if (dob > today) {
         newErrors.dob = 'Date of birth cannot be in the future';
      }

      // Password and confirm password validation
      if (formData.password !== formData.confirmPassword) {
         newErrors.password = 'Passwords do not match';
         newErrors.confirmPassword = 'Passwords do not match';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (validate()) {
        try {
          // Send the request to the backend API
          const response = await axios.post('/api/Servicesman', formData);
    
          // Show success alert
          alert('Account created successfully!');
          
          // Reset form data after successful submission
          setFormData({
            firstName: '',
            lastName: '',
            dob: '',
            contactNumber: '',
            email: '',
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            password: '',
            confirmPassword: '',
            termsAccepted: false
          });
    
          // Optionally clear any existing errors
          setErrors({});
          
          console.log(response.data); // Log the response for debugging
        } catch (error) {
          // Handle errors
          if (error.response && error.response.data) {
            alert(error.response.data.message || 'An error occurred. Please try again.');
          } else {
            alert('Unable to create account. Please try again.');
          }
        }
      }
    };
    

   return (
      <section className="Employeereg min-vh-100 d-flex flex-column align-items-center justify-content-center">
         <div className="row justify-content-center">
            <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-11 d-flex flex-column align-items-center justify-content-center">
               <div className="d-flex justify-content-center py-1">
                  <Link to="#" className="reg-logo d-flex align-items-center w-auto">
                     <img src={logol1} alt="" className="logol1" />
                     <span><img src={logor1} alt="" className="logor1" /></span>
                  </Link>
               </div>

               <div className="Employeereg-from mb-3">
                  <div className="form">
                     <div>
                        <h3 className="pb-0 fs-4">Register For Technician</h3>
                        <p className="small">Register Today, Empower Your Tomorrow!</p>
                     </div>
                     <hr />
                     <form onSubmit={handleSubmit} noValidate="">
                        <div className="row">
                           <div className="col-12 col-md-6">
                              <label htmlFor="firstName" className="form-label">
                                 Full Name
                                 <span className="text-danger"> *</span>
                              </label>
                              <div className="row">
                                 <div className="col-12 col-md-6">
                                    <input
                                       type="text"
                                       name="firstName"
                                       className="form-control"
                                       id="firstName"
                                       value={formData.firstName}
                                       onChange={handleChange}
                                       required=""
                                    />
                                    <div id="firstName" className="form-text">First Name</div>
                                    <div className="form-text text-danger">{errors.firstName}</div>
                                 </div>
                                 <div className="col-12 col-md-6">
                                    <input
                                       type="text"
                                       name="lastName"
                                       className="form-control"
                                       id="lastName"
                                       value={formData.lastName}
                                       onChange={handleChange}
                                       required=""
                                    />
                                    <div id="lastName" className="form-text">Last Name</div>
                                    <div className="form-text text-danger">{errors.lastName}</div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-12 col-md-6">
                              <label htmlFor="dob" className="form-label">
                                 Date of Birth
                                 <span className="text-danger"> *</span>
                              </label>
                              <input
                                 type="date"
                                 name="dob"
                                 className="form-control"
                                 id="dob"
                                 value={formData.dob}
                                 onChange={handleChange}
                                 required=""
                              />
                              <div className="form-text text-danger">{errors.dob}</div>
                           </div>
                        </div>

                        <div className="row mt-3">
                           <div className="col-12 col-md-6">
                              <label htmlFor="contactNumber" className="form-label">
                                 Contact Number
                                 <span className="text-danger"> *</span>
                              </label>
                              <input
                                 type="text"
                                 name="contactNumber"
                                 className="form-control"
                                 id="contactNumber"
                                 value={formData.contactNumber}
                                 onChange={handleChange}
                                 required=""
                              />
                              <div id="contactNumber" className="form-text">(000) 000-0000</div>
                              <div className="form-text text-danger">{errors.contactNumber}</div>
                           </div>
                           <div className="col-12 col-md-6">
                              <label htmlFor="email" className="form-label">
                                 E-mail
                                 <span className="text-danger"> *</span>
                              </label>
                              <input
                                 type="email"
                                 name="email"
                                 className="form-control"
                                 id="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required=""
                              />
                              <div id="email" className="form-text">example@example.com</div>
                              <div className="form-text text-danger">{errors.email}</div>
                           </div>
                        </div>

                        <div className="row mt-3">
                           <div className="col-12">
                              <label htmlFor="address" className="form-label">
                                 Address
                                 <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="row">
                              <div className="col-12 col-md-12">
                                 <input
                                    type="text"
                                    name="streetAddress"
                                    className="form-control"
                                    id="streetAddress"
                                    value={formData.streetAddress}
                                    onChange={handleChange}
                                    required=""
                                 />
                                 <div id="streetAddress" className="form-text">Street Address</div>
                                 <div className="form-text text-danger">{errors.streetAddress}</div>
                              </div>

                              <div className="col-12 col-md-4 pt-3">
                                 <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    id="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required=""
                                 />
                                 <div id="city" className="form-text">City</div>
                                 <div className="form-text text-danger">{errors.city}</div>
                              </div>
                              <div className="col-12 col-md-4 pt-3">
                                 <input
                                    type="text"
                                    name="state"
                                    className="form-control"
                                    id="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required=""
                                 />
                                 <div id="state" className="form-text">State / Province</div>
                                 <div className="form-text text-danger">{errors.state}</div>
                              </div>
                              <div className="col-12 col-md-4 pt-3">
                                 <input
                                    type="text"
                                    name="postalCode"
                                    className="form-control"
                                    id="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    required=""
                                 />
                                 <div id="postalCode" className="form-text">Postal / Zip Code</div>
                                 <div className="form-text text-danger">{errors.postalCode}</div>
                              </div>
                           </div>
                        </div>

                        <div className="row mt-3">
                           <div className="col-12 col-md-6">
                              <label htmlFor="password" className="form-label">
                                 Password <span className="text-danger"> *</span>
                              </label>
                              <input
                                 type="password"
                                 name="password"
                                 className="form-control"
                                 id="password"
                                 value={formData.password}
                                 onChange={handleChange}
                                 required=""
                              />
                              <div className="form-text text-danger">{errors.password}</div>
                           </div>
                           <div className="col-12 col-md-6">
                              <label htmlFor="confirmPassword" className="form-label">
                                 Confirm Password <span className="text-danger"> *</span>
                              </label>
                              <input
                                 type="password"
                                 name="confirmPassword"
                                 className="form-control"
                                 id="confirmPassword"
                                 value={formData.confirmPassword}
                                 onChange={handleChange}
                                 required=""
                              />
                              <div className="form-text text-danger">{errors.confirmPassword}</div>
                           </div>
                        </div>

                        <div className="col-12 mt-3">
                           <div className="form-check">
                              <input
                                 className="form-check-input"
                                 name="termsAccepted"
                                 type="checkbox"
                                 id="acceptTerms"
                                 checked={formData.termsAccepted}
                                 onChange={e => setFormData({ ...formData, termsAccepted: e.target.checked })}
                                 required=""
                              />
                              <label className="form-check-label" htmlFor="acceptTerms">
                                 I agree and accept the{" "}
                                 <Link to="#">terms and conditions</Link>
                              </label>
                              <div className="invalid-feedback text-danger">{errors.termsAccepted}</div>
                           </div>
                        </div>

                        <hr className="text-secondary" />
                        <div className="col-7 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 m-auto mt-3">
                           <button className="btn btn-primary w-100" type="submit">
                              Create Account
                           </button>
                        </div>
                        <div className="col-12 text-center mt-3">
                           <p className="small mb-0">
                              Already have an account?{" "}
                              <Link to="/login">Log in</Link>
                           </p>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServiceMan;
