import React from 'react'
import about from '../../assets/img/gallery/about.png'

const About = () => {
  return (
    <section className="about-area section-padding30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img ">
                            <img src={about} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-caption">
                            <div className="section-tittle section-tittle3 mb-35">
                                <span>ABOUT oUR GYM</span>
                                <h2>Safe Body building proper Solutions That Saves our Valuable Time!</h2>
                            </div>
                                <p className="mb-65 pera-bottom">Brooke presents services designed with flexible and convenient layouts. You can choose your favorite designs and elements for a tailored experience, with unlimited customization possibilities. We aim for a pixel-perfect replication of the designer's vision.</p>
                            <a href="from.html" className="btn">become a member</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About