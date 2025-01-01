import React from 'react'
import { Link } from 'react-router'
import logol1 from '../../../assets/Images/Logos/logol1.png'
import logor1 from '../../../assets/Images/Logos/logor1.png'
import './SignUp.css'
const Vendor = () => {
   return (
      <section className="vendor min-vh-100 d-flex flex-column align-items-center justify-content-center ">
         <div className="row justify-content-center">
            <div className="col-xxl-11 col-xl-10 col-lg-10 col-md-10  d-flex flex-column align-items-center justify-content-center">
               <div className="d-flex justify-content-center py-1">
                  <Link
                     to="#"
                     className="reg-logo d-flex align-items-center w-auto"
                  >
                     <img src={logol1} alt="" className="logol1" />
                     <span className=""><img src={logor1} alt="" className="logor1" /></span>
                  </Link>
               </div>
               {/* End Logo */}
               <div className="vendor-from mb-3">
                  <div className="form">
                     <div className="">
                        <h3 className="pb-0 fs-4">
                           Register Your Business
                        </h3>
                        <p className=" small">
                           Please provide all required details to register your business with us
                        </p>
                     </div>
                     <hr />
                     <form className="" noValidate="">
                        <div className="row">
                           <div className="col-12 col-md-4">
                              <label htmlFor="yourName" className="form-label">
                                 Business Owner
                                 <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <div className="row">
                                 <div className="col-12 col-md-6">
                                    <input
                                       type="text"
                                       name="name"
                                       className="form-control"
                                       id="yourName"
                                       required=""
                                    />
                                    <div id="emailHelp" class="form-text">First Name</div>
                                 </div>
                                 <div className="col-12 col-md-6">
                                    <input
                                       type="text"
                                       name="name"
                                       className="form-control"
                                       id="yourName"
                                       required=""
                                    />
                                    <div id="emailHelp" class="form-text">Last Name</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="yourName" className="form-label">
                                 Contact Number
                                 <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <input
                                 type="text"
                                 name="name"
                                 className="form-control"
                                 id="yourName"
                                 required=""
                              />
                              <div id="emailHelp" class="form-text">(000) 000-000</div>
                           </div>
                        </div>
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="yourName" className="form-label">
                                 E-mail
                                 <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <input
                                 type="text"
                                 name="name"
                                 className="form-control"
                                 id="yourName"
                                 required=""
                              />
                              <div id="emailHelp" class="form-text">example@example.com</div>
                           </div>
                        </div>
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="yourName" className="form-label">
                                 Address
                                 <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <div className="row">
                                 <div className="col-12 col-md-12">
                                    <input
                                       type="text"
                                       name="name"
                                       className="form-control"
                                       id="yourName"
                                       required=""
                                    />
                                    {/* <span className="text-secondary"></span> */}
                                    <div id="emailHelp" class="form-text">Street Address</div>
                                 </div>
                                 <div className="col-12 col-md-12 pt-3">
                                    <input
                                       type="text"
                                       name="name"
                                       className="form-control"
                                       id="yourName"
                                       required=""
                                    />
                                    {/* <span className="text-secondary">Street Address Line 2</span> */}
                                    <div id="emailHelp" class="form-text">Street Address Line 2</div>
                                 </div>
                                 <div className="col-12 col-md-6 pt-3">
                                    <input
                                       type="text"
                                       name="name"
                                       className="form-control"
                                       id="yourName"
                                       required=""
                                    />
                                    {/* <span className="text-secondary">City</span> */}
                                    <div id="emailHelp" class="form-text">City</div>
                                 </div>
                                 <div className="col-12 col-md-6 pt-3">
                                    <input
                                       type="text"
                                       name="name"
                                       className="form-control"
                                       id="yourName"
                                       required=""
                                    />
                                    {/* <span className="text-secondary"></span> */}
                                    <div id="emailHelp" class="form-text">State / Province</div>
                                 </div>
                                 <div className="col-md-12 pt-3">
                                    <input
                                       type="text"
                                       name="name"
                                       className="form-control"
                                       id="yourName"
                                       required=""
                                    />
                                    {/* <span className="text-secondary"></span> */}
                                    <div id="emailHelp" class="form-text">Postal / Zip Code</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label htmlFor="yourName" className="form-label">
                                 Business Name
                                 <span className="text-danger"> *</span>
                              </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <input
                                 type="text"
                                 name="name"
                                 className="form-control"
                                 id="yourName"
                                 required=""
                              />
                           </div>
                        </div>
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label for="validationCustom04" class="form-label">Type of Business <span className="text-danger"> *</span></label>
                           </div>
                           <div className="col-12 col-md-8">
                              <select class="form-select" id="validationCustom04" required>
                                 <option selected disabled value="">Choose...</option>
                                 <option>...</option>
                              </select>
                           </div>
                        </div>
                        <div className="row mt-3">
                           <div className="col-12 col-md-4">
                              <label for="validationTextarea" class="form-label">Message </label>
                           </div>
                           <div className="col-12 col-md-8">
                              <textarea class="form-control" id="validationTextarea" required></textarea>
                           </div>
                        </div>
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
                              <div className="invalid-feedback">
                                 You must agree before submitting.
                              </div>
                           </div>
                        </div>
                        <hr className="text-secondary" />
                        <div className="col-7 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 m-auto mt-3">
                           <button className="btn btn-primary w-100" type="submit">
                              Create Account
                           </button>
                        </div>
                        <div className="col-12  text-center mt-3">
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
      </section >
   )
}
export default Vendor