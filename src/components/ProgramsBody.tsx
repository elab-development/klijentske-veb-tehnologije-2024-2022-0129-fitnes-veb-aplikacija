import React from 'react'
import OneProgram from './OneProgram'
import { Program } from '../models/program';
import { IoMdFootball } from "react-icons/io";
import { IoIosTennisball } from "react-icons/io";
import { FaBasketball } from "react-icons/fa6";
import { PiBoxingGloveFill } from "react-icons/pi";



const programs: Program[] = [
    new Program('FOOTBALL', 'Messi is the goat', <IoMdFootball></IoMdFootball>, '/programs'),
    new Program('TENIS', 'NOLE DJOLE, DJOLE NOLE, NOVAK DJOKOVIC THE GOAT OF TENIS', <IoIosTennisball></IoIosTennisball>, '/tennis'),
    new Program('BASKETBALL', 'Unlock Your Basketball Potential: Elevate Your Game to Pro Level', <FaBasketball></FaBasketball>, '/programs/basketball'),
    new Program('BOXING', 'onaj cecin', <PiBoxingGloveFill></PiBoxingGloveFill>, '/'),
    new Program('GYM', 'onaj cecin', <PiBoxingGloveFill></PiBoxingGloveFill>, '/'),
    new Program('STREET WORKOUT', 'onaj cecin', <PiBoxingGloveFill></PiBoxingGloveFill>, '/'),
    new Program('1-ON-1 SESSION', 'onaj cecin', <PiBoxingGloveFill></PiBoxingGloveFill>, '/'),
];

const ProgramsBody: React.FC = () => {
  return (
    <main>
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center pt-70">
                                <h2>our Programs</h2>
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
                                <span>oUR PROGRAMS</span>
                                <h2>CHOOSE YOUR PROGRAM </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <OneProgram program={programs[0]}></OneProgram>
                    <OneProgram program={programs[1]}></OneProgram>
                    <OneProgram program={programs[2]}></OneProgram>
                    <OneProgram program={programs[3]}></OneProgram>
                    <OneProgram program={programs[4]}></OneProgram>
                    <OneProgram program={programs[5]}></OneProgram>
                    <OneProgram program={programs[6]}></OneProgram>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProgramsBody