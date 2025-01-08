import { Link } from 'react-router'
import './Login.css'
import logol1 from '../../../assets/Images/Logos/logol1.png'
import logor1 from '../../../assets/Images/Logos/logor1.png'
import vendarlogo1 from '../../../assets/Images/Logos/Vandarsignlogo2.png'
import Servicelogo1 from '../../../assets/Images/Logos/servicesmanlogo.png'
import Userlogo1 from '../../../assets/Images/Logos/Userlogo1.png'
const Login = () => {
    return (
        <section className="login-page section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4 ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center py-4">
                            <Link
                                to="/"
                                className="reg-logo d-flex align-items-center w-auto"
                            >
                                <img src={logol1} alt="logol1" className="logol1" />
                                <span className=""><img src={logor1} alt="" className="logor1" /></span>
                            </Link>
                        </div>
                        {/* End Logo */}
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">
                                        Login to Your Account
                                    </h5>
                                    <p className="text-center small">
                                        Enter your username &amp; password to login
                                    </p>
                                </div>
                                <form className="row g-3 needs-validation" noValidate="">
                                    <div className="col-12">
                                        <label htmlFor="yourUsername" className="form-label">
                                            Username
                                        </label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend">
                                                @
                                            </span>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                id="yourUsername"
                                                required=""
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="yourPassword" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="yourPassword"
                                            required=""
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your password!
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="remember"
                                                defaultValue="true"
                                                id="rememberMe"
                                            />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* <button className="btn btn-primary w-100" type="submit">
                                            login
                                        </button> */}
                                        <Link to="/admin/dashboard" className="btn btn-primary w-100">Login</Link>
                                    </div>
                                    <div className="col-12">
                                        <p className="small mb-0">
                                            Don't have an account?{" "}
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
                                </form>
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

                            <div className="d-flex align-items-center justify-content-start">
                                <div data-bs-dismiss="modal">
                                    <Link to="/serviceman">
                                        <img src={Userlogo1} alt="service-Logo" className="modallogo" />
                                    </Link>
                                </div>
                                <div className="ms-4" data-bs-dismiss="modal">
                                    <Link to="/usersignup" className="btn btn-outline-primary" >User SignUp!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login