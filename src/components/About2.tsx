import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Qutaion from '../../assets/img/gallery/qutaion.png';
import About2png from '../../assets/img/gallery/about2.png';
import About3png from '../../assets/img/gallery/about4.png'; // Example additional image
import '../../assets/css/About2.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    img: About2png,
    text: "Brooke presents services designed with flexible and convenient layouts. You can choose your favorite designs and elements for a tailored experience, with unlimited customization possibilities. We aim for a pixel-perfect replication of the designer's vision.",
    name: "John Smith",
    title: "Gym Trainer"
  },
  {
    img: About3png,
    text: "Another testimonial text goes here. This is a placeholder for the second testimonial in the slideshow.",
    name: "Jane Doe",
    title: "Yoga Instructor"
  }
];

const About2 = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="about-area2 testimonial-area section-padding30 fix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-11 col-sm-11">
                    <div className="about-img2" style={{height: '500px'}}>
                        <TransitionGroup>
                            <CSSTransition key={index} timeout={2000} classNames="slides">
                                <img src={testimonials[index].img} alt="" />
                            </CSSTransition>
                        </TransitionGroup>
                        <div className="shape-qutaion d-none d-sm-block">
                            <img src={Qutaion} alt="" style={{zIndex: '3'}}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-9 col-sm-9">
                    <div className="about-caption" style={{height: '500px', paddingTop: '80px'}}>
                        <div className="section-tittle mb-55">
                            <span>Client Feedback</span>
                            <h2>How our clients perceive us</h2>
                        </div>
                        <TransitionGroup>
                            <CSSTransition key={index} timeout={2000} classNames="slides">
                                <div className="single-testimonial">
                                    <div className="testimonial-caption">
                                        <p>{testimonials[index].text}</p>
                                        <div className="rattiong-caption">
                                            <span>{testimonials[index].name}<span>{testimonials[index].title}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
            <div className="buttons ">
                <button onClick={prevSlide}><FaChevronLeft/></button>
                <button onClick={nextSlide}><FaChevronRight/></button>
            </div>
        </div>
    </section>
  );
};

export default About2;
