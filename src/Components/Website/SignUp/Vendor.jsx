import React, { useState } from 'react'
import { Link } from 'react-router'
import logol1 from '../../../assets/Images/Logos/logol1.png'
import logor1 from '../../../assets/Images/Logos/logor1.png'
import './SignUp.css'
import axios from 'axios'; // Import Axios

const Vendor = () => {
   const [formData, setFormData] = useState({
      businessOwnerFirstName: '',
      businessOwnerLastName: '',
      contactNumber: '',
      email: '',
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      businessName: '',
      password: '',

   });

   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value
      }));
   };

   const validateForm = () => {
      const validationErrors = {};

      // Check for required fields
      Object.keys(formData).forEach((key) => {
         if (!formData[key]) {
            validationErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required.`;
         }
      });

      // Validate email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (formData.email && !emailRegex.test(formData.email)) {
         validationErrors.email = "Invalid email format.";
      }

      // Validate contact number (simple example)
      const phoneRegex = /^[0-9]{10}$/;
      if (formData.contactNumber && !phoneRegex.test(formData.contactNumber)) {
         validationErrors.contactNumber = "Contact number must be a 10-digit number.";
      }


      // Validate password match
      if (formData.password !== formData.confirmPassword) {
         validationErrors.confirmPassword = "Passwords do not match.";
      }










      
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
   };








   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
   
      try {
         console.log(formData);
   
         // Send data to the server
         const response = await axios.post('/api/BussinessUser', formData);
         console.log('Success:', response.data); // Handle the response
   
         // Show success message
         alert('Account created successfully!');
   
         // Reset form state
         setFormData({
            businessOwnerFirstName: '',
            businessOwnerLastName: '',
            contactNumber: '',
            email: '',
            streetAddress: '',
            city: '',
            state: '',
            postalCode: '',
            businessName: '',
            password: '',
            confirmPassword: '',  // Reset confirmPassword
         });
   
         // Clear validation errors
         setErrors({});
         
      } catch (error) {
         console.error('Error:', error.response ? error.response.data : error.message);
      }
   };
   

   return (
      <section className="vendor min-vh-100 d-flex flex-column align-items-center justify-content-center">
         <div className="row justify-content-center">
            <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-10  d-flex flex-column align-items-center justify-content-center">
               <div className="d-flex justify-content-center py-1">
                  <Link to="#" className="reg-logo d-flex align-items-center w-auto">
                     <img src={logol1} alt="" className="logol1" />
                     <span><img src={logor1} alt="" className="logor1" /></span>
                  </Link>
               </div>
               {/* End Logo */}
               <div className="vendor-from mb-3">
                  <div className="form">
                     <div className="pb-1">
                        <h3 className="pb-0 fs-4">
                           Register Your Vendor
                        </h3>
                        <p className="small">
                           Please provide all required details to register your business with us
                        </p>
                     </div>
                     <hr />
                     <form onSubmit={handleSubmit} noValidate="">

                        {/* Business Owner */}
                        <div className="row">
                           <div className="col-12 col-md-4">
                              <label htmlFor="businessOwnerFirstName" className="form-label">
                                 Business Owner <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <div className="row">
                                 <div className="col-12 col-md-6">
                                    <input
                                       type="text"
                                       name="businessOwnerFirstName"
                                       className="form-control"
                                       id="businessOwnerFirstName"
                                       value={formData.businessOwnerFirstName}
                                       onChange={handleChange}
                                       required=""
                                    />
                                    <div id="emailHelp" className="form-text">First Name</div>
                                    {errors.businessOwnerFirstName && <div className="text-danger">{errors.businessOwnerFirstName}</div>}
                                 </div>
                                 <div className="col-12 col-md-6">
                                    <input
                                       type="text"
                                       name="businessOwnerLastName"
                                       className="form-control"
                                       id="businessOwnerLastName"
                                       value={formData.businessOwnerLastName}
                                       onChange={handleChange}
                                       required=""
                                    />
                                    <div id="emailHelp" className="form-text">Last Name</div>
                                    {errors.businessOwnerLastName && <div className="text-danger">{errors.businessOwnerLastName}</div>}
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Contact Number */}
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="contactNumber" className="form-label">
                                 Contact Number <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <input
                                 type="text"
                                 name="contactNumber"
                                 className="form-control"
                                 id="contactNumber"
                                 value={formData.contactNumber}
                                 onChange={handleChange}
                                 required=""
                              />
                              <div id="emailHelp" className="form-text">(000) 000-000</div>
                              {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
                           </div>
                        </div>

                        {/* Email */}
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="email" className="form-label">
                                 E-mail <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <input
                                 type="text"
                                 name="email"
                                 className="form-control"
                                 id="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required=""
                              />
                              <div id="emailHelp" className="form-text">example@example.com</div>
                              {errors.email && <div className="text-danger">{errors.email}</div>}
                           </div>
                        </div>

                        {/* Address */}
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="streetAddress" className="form-label">
                                 Address <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
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
                                    <div id="emailHelp" className="form-text">Street Address</div>
                                    {errors.streetAddress && <div className="text-danger">{errors.streetAddress}</div>}
                                 </div>
                                 <div className="col-12 col-md-6 pt-3">
                                    <input
                                       type="text"
                                       name="city"
                                       className="form-control"
                                       id="city"
                                       value={formData.city}
                                       onChange={handleChange}
                                       required=""
                                    />
                                    <div id="emailHelp" className="form-text">City</div>
                                    {errors.city && <div className="text-danger">{errors.city}</div>}
                                 </div>
                                 <div className="col-12 col-md-6 pt-3">
                                    <input
                                       type="text"
                                       name="state"
                                       className="form-control"
                                       id="state"
                                       value={formData.state}
                                       onChange={handleChange}
                                       required=""
                                    />
                                    <div id="emailHelp" className="form-text">State / Province</div>
                                    {errors.state && <div className="text-danger">{errors.state}</div>}
                                 </div>
                                 <div className="col-md-12 pt-3">
                                    <input
                                       type="text"
                                       name="postalCode"
                                       className="form-control"
                                       id="postalCode"
                                       value={formData.postalCode}
                                       onChange={handleChange}
                                       required=""
                                    />
                                    <div id="emailHelp" className="form-text">Postal / Zip Code</div>
                                    {errors.postalCode && <div className="text-danger">{errors.postalCode}</div>}
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Business Name */}
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="businessName" className="form-label">
                                 Business Name <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <input
                                 type="text"
                                 name="businessName"
                                 className="form-control"
                                 id="businessName"
                                 value={formData.businessName}
                                 onChange={handleChange}
                                 required=""
                              />
                              {errors.businessName && <div className="text-danger">{errors.businessName}</div>}
                           </div>
                        </div>

                        {/* Password */}
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="password" className="form-label">
                                 Password <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-4">
                              <input
                                 type="password"
                                 name="password"
                                 className="form-control"
                                 id="password"
                                 value={formData.password}
                                 onChange={handleChange}
                                 required=""
                              />
                           </div>
                           <div className="col-12 col-md-4">
                              <input
                                 type="password"
                                 name="confirmPassword"
                                 className="form-control"
                                 id="confirmPassword"
                                 value={formData.confirmPassword}
                                 onChange={handleChange}
                                 required=""
                              />
                              {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                           </div>
                        </div>

                        {/* Terms */}
                        <div className="col-12 mt-3">
                           <div className="form-check">
                              <input
                                 className="form-check-input"
                                 name="terms"
                                 type="checkbox"
                                 defaultValue=""
                                 id="acceptTerms"
                                 required=""
                              />
                              <label className="form-check-label" htmlFor="acceptTerms">
                                 I agree and accept the{" "}
                                 <Link to="#">terms and conditions</Link>
                              </label>
                           </div>
                        </div>

                        <hr className="text-secondary" />

                        {/* Submit Button */}
                        <div className="col-7 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 m-auto mt-3">
                           <button className="btn btn-primary w-100" type="submit">
                              Create Account
                           </button>
                        </div>

                        {/* Login Link */}
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
   )
}

export default Vendor;
