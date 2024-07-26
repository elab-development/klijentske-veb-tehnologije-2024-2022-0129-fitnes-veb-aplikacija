import React from 'react'
import gallery5 from '../../assets/img/gallery/gallery5.png'
import gallery4 from '../../assets/img/gallery/gallery4.png'
import gallery3 from '../../assets/img/gallery/gallery3.png'
import gallery2 from '../../assets/img/gallery/gallery2.png'
import gallery1 from '../../assets/img/gallery/gallery1.png'

const Gallery = () => {
  return (
    <div className="gallery-area">
            <div className="container-fluid p-0 fix">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img big-img" style={{backgroundImage: `url(${gallery1})`}}></div>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                    <h3>Best fitness gallery</h3>
                                    <p>Fitness, Body</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div className="gallery-img small-img" style={{backgroundImage: `url(${gallery2})`}}></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                            <h3>Best fitness gallery</h3>
                                            <p>Fitness, Body</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div className="gallery-img small-img" style={{backgroundImage: `url(${gallery3})`}}></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                            <h3>Best fitness gallery</h3>
                                            <p>Fitness, Body</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div className="gallery-img small-img" style={{backgroundImage: `url(${gallery4})`}}></div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                            <h3>Best fitness gallery</h3>
                                            <p>Fitness, Body</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="box snake mb-30">
                                    <div className="gallery-img small-img" style={{backgroundImage: `url(${gallery5})`}}></div>
                                    <div className="overlay">
                                        <div className="overlay-content" >
                                            <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                            <h3>Best fitness gallery</h3>
                                            <p>Fitness, Body</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Gallery