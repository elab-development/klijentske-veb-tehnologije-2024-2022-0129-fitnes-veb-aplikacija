import React from 'react'
import { Program } from '../models/program.tsx';

interface OneProgramProps {
  program: Program;
}
const OneProgram: React.FC<OneProgramProps> = ({program}) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
                <i className="flaticon">{program.image}</i>
            </div>
            <div className="cat-cap">
                <h5><a href={program.link}>{program.name}</a></h5>
                <p>{program.description}</p>
            </div>
            <div className="img-cap">
                <a href={program.link} className="">Discover More <i className="ti-arrow-right"></i></a>
            </div>
        </div>
    </div>
  )
}

export default OneProgram