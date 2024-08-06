import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className="contact-form-main" style={{height: "100%", margin: 0}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="form-wrapper">
                            <div className="form-tittle">
                                <div className="row ">
                                    <div className="col-lg-11 col-md-10 col-sm-10">
                                        <div className="section-tittle">
                                            <span>Register Form</span>
                                            <h2>Make an account</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form id="contact-form" action="#" method="POST">
                                <div className="">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="text" name="name" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="text" name="name" placeholder="First Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="text" name="name" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="text" name="name" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-box email-icon mb-30">
                                            <input type="password" name="password" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="password" name="password" placeholder="Retype Password"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12" style={{marginTop: "70px"}}>
                                        <div className="submit-info">
                                            <button className="btn" type="submit">Register</button>
                                        </div>
                                        <div className="mt-30">
                                            <p>Already have an account?<Link to="/login" className="reg-btn">Log in</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Register