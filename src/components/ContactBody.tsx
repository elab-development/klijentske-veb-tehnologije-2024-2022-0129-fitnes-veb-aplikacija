import React from 'react'
import Contact from './Contact'

const ContactBody = () => {
  return (
    <main>
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center pt-70">
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{paddingTop: "150px", paddingBottom: "150px"}}>
        <Contact></Contact>
        </div>
    </main>
  )
}

export default ContactBody