import React from 'react'
import Tracker from './Tracker';

const TrackerBody: React.FC = () => {
  return (
    <main>
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 pt-70 text-center">
                                <h2>Workout Tracker</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Tracker></Tracker>
    </main>
  )
}

export default TrackerBody