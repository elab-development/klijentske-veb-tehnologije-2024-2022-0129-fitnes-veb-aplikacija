import React, { useEffect } from 'react'
import $ from 'jquery';
import 'slick-carousel';
import About from './About'
import Services from './Services'
import About2 from './About2'


const IndexBody = () => {
  return (
    <main>
        <div className="slider-area position-relative">
        <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                            <div className="hero__caption">
                                <span data-animation="fadeInLeft" data-delay="0.1s">with Drki and Đuka</span>
                                <h1 data-animation="fadeInLeft" data-delay="0.4s">Learn to play every sport in one place.</h1>
                                <a href="from.html" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">become a member</a>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                            <div className="hero__caption">
                                <span data-animation="fadeInLeft" data-delay="0.1s">with Bora and Majstor Ž</span>
                                <h1 data-animation="fadeInLeft" data-delay="0.4s">Join us so you can become an Athlete X too.</h1>
                                <a href="from.html" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">become a member</a>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        </div>
        <About/>
        <Services/>
        <About2/>
    </main>
  )
}

export default IndexBody
