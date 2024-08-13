import React, { useEffect, useState } from 'react'
import OneExercise from './OneExercise'
import { Exercise } from '../models/exercise'
import axios from 'axios'

const Tracker: React.FC = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get('/exercises.json');
            const exercisesArray: Exercise[] = response.data.exercises.map((exercise: any) => {
                return new Exercise(exercise.name, exercise.image, exercise.tag);
            });
            setExercises(exercisesArray);
        }

        fetchData();
    }, []);

    const [selectedExercise, setSelectedExercise] = useState<string>('')

    const handleExerciseSelect = (exercise: string) => {
        setSelectedExercise(exercise)
        window.scrollTo({ top: 200, behavior: 'smooth' })
    }

    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const handleCategorySelect = (category: string) => {
      setSelectedCategory(category);
    };

    const [search, setSearch] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value.toLowerCase());
    };

    const filteredExercises = exercises.filter(exercise => {
      const categoryMatch = selectedCategory === 'All' || exercise.tag === selectedCategory;
      const searchMatch = exercise.name.toLowerCase().includes(search) || exercise.tag.toLowerCase().includes(search);
      return categoryMatch && searchMatch;
    })
    return (
    <>
    <section className="contact-form-main" style={{ height: "100%", margin: 0, marginTop: '5%', padding: 0 }}>
      <div className="container">
          <div>
            <div className="form-wrapper">
              <form id="contact-form">
                <div className="row" style={{justifyContent: 'space-between'}}>
                  <div>
                    <div className="form-box user-icon mb-30">
                      <input
                        style={{ textTransform: 'none' }}
                        type="text"
                        name="exercise"
                        placeholder="Selected exercise"
                        value={selectedExercise}
                        disabled
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-box password-icon mb-30">
                      <input
                        style={{ textTransform: 'none' }}
                        type="number"
                        name="reps"
                        placeholder="Reps"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-box password-icon mb-30">
                      <input
                        style={{ textTransform: 'none' }}
                        type="number"
                        name="set"
                        placeholder="Set"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-box password-icon mb-30">
                      <input
                        style={{ textTransform: 'none' }}
                        type="number"
                        name="weight"
                        placeholder="Weight / kg"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="submit-info">
                      <button className="btn" type="submit">Add</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    </section>
    <section className="blog_area section-padding" style={{paddingTop: '3%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar">
                            <aside className="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" value={search} onChange={handleSearchChange} placeholder='Search Exercises'/>
                                            <div className="input-group-append">
                                                <button className="btns" type="button"><i className="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </aside>
                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title" style={{color: '#2d2d2d'}}>Sport</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a onClick={() => handleCategorySelect('All')} className="d-flex">
                                            <p>All</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Basketball')} className="d-flex">
                                            <p>Basketball</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Tennis')} className="d-flex">
                                            <p>Tennis</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Football')} className="d-flex">
                                            <p>Football</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title" style={{color: '#2d2d2d'}}>Category</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a onClick={() => handleCategorySelect('All')} className="d-flex">
                                            <p>All</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Abs')} className="d-flex">
                                            <p>Abs</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Back')} className="d-flex">
                                            <p>Back</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Cardio')} className="d-flex">
                                            <p>Cardio</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Chest')} className="d-flex">
                                            <p>Chest</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Full body')} className="d-flex">
                                            <p>Full body</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Legs')} className="d-flex">
                                            <p>Legs</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Shoulders')} className="d-flex">
                                            <p>Shoulders</p>
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
                                        {filteredExercises.map((exercise, index) =>(
                                            <OneExercise key={index} exercise={exercise} onSelect={() => handleExerciseSelect(exercise.name)}></OneExercise>
                                        ))}
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
    </>
    )
}

export default Tracker