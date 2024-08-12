import React from 'react'
import OneExercise from './OneExercise'
import { Exercise } from '../models/exercise'

const exercises: Exercise[] = [
    new Exercise('Push-ups', '../../assets/img/exercises icons/push-up.png'),
]

const Tracker: React.FC = () => {
  return (
    <section className="blog_area section-padding">
            <div className="container">
                <div className="container" style={{paddingBottom: '5%'}}>
                    <form action="">
                        <div className="row" style={{justifyContent: 'space-between'}}>
                            <input type="text" placeholder='Selected Exercise' disabled/>
                            <input type="number" placeholder="Sets" />
                            <input type="number" placeholder="Reps" />
                            <button className='btn' type="submit">Add</button>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar">
                            <aside className="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='Search Exercises'/>
                                            <div className="input-group-append">
                                                <button className="btns" type="button"><i className="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Search</button>
                                </form>
                            </aside>
                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title" style={{color: '#2d2d2d'}}>Category</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Chest</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Legs</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Tennis drills</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Basketball drills</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>...</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className ="blog_left_sidebar">
                            <section className='services-area'>
                                <div className='container'>
                                    <div className='row'>
                                        <OneExercise exercise={exercises[0]}></OneExercise>
                                        <OneExercise exercise={exercises[0]}></OneExercise>
                                        <OneExercise exercise={exercises[0]}></OneExercise>
                                        <OneExercise exercise={exercises[0]}></OneExercise>
                                        <OneExercise exercise={exercises[0]}></OneExercise>
                                        <OneExercise exercise={exercises[0]}></OneExercise>
                                    </div>
                                </div>
                            </section>
                            <nav className="blog-pagination justify-content-center d-flex">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a href="#" className="page-link" aria-label="Previous">
                                            <i className="ti-angle-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">1</a>
                                    </li>
                                    <li className="page-item active">
                                        <a href="#" className="page-link">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link" aria-label="Next">
                                            <i className="ti-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Tracker