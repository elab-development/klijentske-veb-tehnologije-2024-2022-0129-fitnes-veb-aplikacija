import React from 'react'
import OneProgram from './OneProgram'
import sectionBg from '../../assets/img/gallery/section_bg01.png'

const Services = () => {
  return (
    <section className="services-area pt-100 pb-150 section-bg" style={{backgroundImage: `url(${sectionBg})`}}>
        <section className="wantToWork-area w-padding">
            <div className="container">
                <div className="row align-items-end justify-content-between">
                    <div className="col-lg-6 col-md-10 col-sm-10">
                        <div className="section-tittle section-tittle2">
                            <span>oUR sERVICES FOR YOU</span>
                            <h2>PUSH YOUR LIMITS FORWARD</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3">
                        <a href="services.html" className="btn wantToWork-btn f-right">More Services</a>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <div className="row">
                <OneProgram></OneProgram>
                <OneProgram></OneProgram>
                <OneProgram></OneProgram>
            </div>
        </div>
    </section>
  )
}

export default Services