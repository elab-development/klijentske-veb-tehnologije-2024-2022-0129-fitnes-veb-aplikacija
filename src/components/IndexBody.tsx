import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../assets/css/Slider.css';
import About from './About'
import Services from './Services'
import About2 from './About2'
import Gallery from './Gallery';
import OurTeam from './OurTeam';
import Contact from './Contact';
import { Program } from '../models/program';
import { GrRun } from "react-icons/gr";
import { SlNotebook } from "react-icons/sl";
import { IoPeopleSharp } from "react-icons/io5";


const services: Program[] = [
    new Program('TRAINING PROGRAM FOR YOUR SPORT', 'Browse through our sport workout programs and find the right one for you and your fitness goals.', <GrRun></GrRun>, '/programs'),
    new Program('WORKOUT TRACKING', 'Track your workouts and your progress with our easy-to-use fitness tracking feature.', <SlNotebook></SlNotebook>, '/'),
    new Program('1-ON-1 SESSION WITH COACH', 'If you need any help with your fitness journey, our specialized coaches are here to help you out.', <IoPeopleSharp></IoPeopleSharp>, '/programs')
];

const slides = [
    {
        spanText: 'with Drki and Đuka',
        h1Text: 'Learn to play every sport in one place.',
        href: 'from.html',
        btnText: 'become a member',
    },
    {
        spanText: 'with Bora and Majstor Ž',
        h1Text: 'Join us so you can become an Athlete X too.',
        href: 'from.html',
        btnText: 'become a member',
    },
];

const IndexBody: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);
    return (
    <main>
        <div className="slider-area position-relative">
            <div className="slider-active">
                <TransitionGroup>
                    <CSSTransition
                        key={currentSlide}
                        timeout={2000}
                        classNames="slide"
                    >
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                                        <div className="hero__caption">
                                            <span>{slides[currentSlide].spanText}</span>
                                            <h1>{slides[currentSlide].h1Text}</h1>
                                            <a href={slides[currentSlide].href} className="btn hero-btn">
                                                {slides[currentSlide].btnText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
        <About/>
        <Services programs={services}/>
        <About2/>
        <Gallery/>
        <OurTeam/>
        <Contact/>
    </main>
  )
}

export default IndexBody
