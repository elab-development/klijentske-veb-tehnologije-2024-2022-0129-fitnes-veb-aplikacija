import React from 'react'
import BasketballDesc from './BasketballDesc'
import BasketballSchedule from './BasketballSchedule'
import BBHero from '../../assets/img/hero/bball_hero.png'

const BasketballBody: React.FC = () => {
  return (
    <main>
        <div className="slider-area2" style={{backgroundImage: `url(${BBHero})`}}>
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 pt-70 text-center">
                                <h2>Blog Details</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BasketballDesc />
        <BasketballSchedule />
    </main>
  )
}

export default BasketballBody