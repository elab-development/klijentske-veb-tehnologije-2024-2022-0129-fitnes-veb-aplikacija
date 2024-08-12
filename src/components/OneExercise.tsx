import React from 'react'
import { Exercise } from '../models/exercise';

interface OneExerciseProps {
    exercise: Exercise;
}

const OneExercise: React.FC<OneExerciseProps> = ({exercise}) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon" >
                <img src={exercise.icon} alt="" />
            </div>
            <div className="cat-cap">
                <h5><a>{exercise.name}</a></h5>
            </div>
            <div className="img-cap">
                <a className="text_u_img_cap" style={{color: 'white'}}>SELECT<i className="ti-arrow-right"></i></a>
            </div>
        </div>
    </div>
  )
}

export default OneExercise