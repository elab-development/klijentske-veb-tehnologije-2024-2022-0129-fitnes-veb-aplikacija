import React from 'react'
import OneProgram from './OneProgram'

const ProgramsBody = () => {
  return (
    <main>
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center pt-70">
                                <h2>our Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="services-area pt-100 pb-150">
            <section className="wantToWork-area w-padding">
                <div className="container">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-lg-6 col-md-10 col-sm-10">
                            <div className="section-tittle">
                                <span>oUR sERVICES FOR YOU</span>
                                <h2>PUSH YOUR LIMITS FORWARD We Offer to you</h2>
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
                    <OneProgram></OneProgram>
                    <OneProgram></OneProgram>
                    <OneProgram></OneProgram>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProgramsBody