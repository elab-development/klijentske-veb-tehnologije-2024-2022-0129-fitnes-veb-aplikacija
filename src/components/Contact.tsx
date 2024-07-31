import React from 'react'
import contact_form from '../../assets/img/gallery/contact_form.png'

const Contact = () => {
  return (
    <section className="contact-form-main">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-7 col-lg-7">
                        <div className="form-wrapper">
                            <div className="form-tittle">
                                <div className="row ">
                                    <div className="col-lg-11 col-md-10 col-sm-10">
                                        <div className="section-tittle">
                                            <span>Contact Form</span>
                                            <h2>Feel Free to contact us!</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form id="contact-form" action="#" method="POST">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="text" name="name" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box email-icon mb-30">
                                            <input type="text" name="email" placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="select-itms" style={{paddingTop: '15px'}}>
                                            <select name="select" id="select2" required style={{color: 'gray', width: '100%', height: '45px', background: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid #e9f0f4', fontSize: '16px', padding: '10px 22px', paddingRight: '30px', fontWeight: '500'}}>
                                                <option value="" disabled selected>Select your program</option>
                                                <option value="">No program/new member</option>
                                                <option value="">Boxing</option>
                                                <option value="">Basketball</option>
                                                <option value="">Tennis</option>
                                                <option value="">Group Fitness</option>
                                                <option value="">One on One Session</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box subject-icon mb-30">
                                            <input type="Email" name="subject" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-box message-icon mb-65">
                                            <textarea name="message" id="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="submit-info">
                                            <button className="btn" type="submit">Send a Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="from-left d-none d-lg-block">
                <img src={contact_form} alt=""/>
            </div>
        </section>
  )
}

export default Contact