import React from 'react'
import Qutaion from '../../assets/img/gallery/qutaion.png'
import About2png from '../../assets/img/gallery/about2.png'
const About2 = () => {
  return (
    <section className="about-area2 testimonial-area section-padding30 fix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-11 col-sm-11">

                    <div className="about-img2">
                        <img src={About2png} alt=""/>

                        <div className="shape-qutaion d-none d-sm-block">
                            <img src={Qutaion} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-9 col-sm-9">
                    <div className="about-caption">

                        <div className="section-tittle mb-55">
                            <span>Client Feedback</span>
                            <h2>How our clients percieve us</h2>
                        </div>

                        <div className="h1-testimonial-active">

                            <div className="single-testimonial">
                                <div className="testimonial-caption">
                                    <p>Brooke presents services designed with flexible and convenient layouts. You can choose your favorite designs and elements for a tailored experience, with unlimited customization possibilities. We aim for a pixel-perfect replication of the designer's vision.</p>
                                    <div className="rattiong-caption">
                                        <span>John Smith<span>Gym Trainer</span> </span>
                                    </div>
                                </div>
                            </div>

                            <div className="single-testimonial">
                                <div className="testimonial-caption">
                                    <p>Brooke presents services designed with flexible and convenient layouts. You can choose your favorite designs and elements for a tailored experience, with unlimited customization possibilities. We aim for a pixel-perfect replication of the designer's vision.</p>
                                    <div className="rattiong-caption">
                                        <span>John Smith<span>Gym Trainer</span> </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About2