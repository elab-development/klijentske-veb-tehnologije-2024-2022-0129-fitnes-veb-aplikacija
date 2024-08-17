import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../contexts/UserContext';

const ProfilePage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setFirstName(user.fullName.split(' ')[0]);
      setLastName(user.fullName.substring(user.fullName.indexOf(' ') + 1));
      setEmail(user.email);
    }
  }, []);

  const [quote, setQuote] = useState({
    text: '',
    author: ''
  });

  useEffect(()=>{
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
        params: {
          token: 'ipworld.info'
        },
        headers: {
          'x-rapidapi-key': '4924bcd8e0msh7534f3a1caaf78ep18a4a6jsna73b9640cb8d',
          'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setQuote(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const handleCategorySelect = (category: number) => {
      setSelectedCategory(category);
    };
  
  return (
    <main>
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center pt-70">
                                <h2>Your Profile Page</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="blog_area single-post-area">
            <div className="posts-list" style={{marginLeft: '10%', marginRight: '10%'}}>
                <div className="single-post">
                    <div className="blog_details">
                        <div className="quote-wrapper">
                            <p>Motivational quote for you: </p>
                            <div className="quotes">
                                <p>{quote.text}</p>
                                - {quote.author}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog_area section-padding" style={{paddingTop: '3%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar" style={{position: 'sticky', top: '140px'}}>
                            <aside className="single_sidebar_widget post_category_widget" >
                                <h4 className="widget_title" style={{color: '#2d2d2d'}}>Settings</h4>
                                    <ul className="list cat-list">
                                        <li>
                                            <a onClick={() => handleCategorySelect(0)} className="d-flex">
                                                <p>Account Information</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => handleCategorySelect(1)} className="d-flex">
                                                <p>Workout Analysis</p>
                                            </a>
                                        </li>
                                    </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className ="blog_left_sidebar">
                          {selectedCategory === 0 && (
                            <section className="contact-form-main" style={{ height: '100%', margin: 0 }}>
                              <div className="container">
                                <div className="row justify-content-center">
                                  <div style={{ width: '100%' }}>
                                    <div className="form-wrapper">
                                      <div id="contact-form" className='profile' style={{display: 'flex', flexDirection: 'row',paddingBottom: '0%'}}>
                                      <p style={{ marginRight: '20px', marginBottom: '0', alignContent: 'center', whiteSpace: 'nowrap'}}>Profile Picture: </p>
                                        <img className="profile-picture" src={'../../assets/img/logo/profile.png'} alt="profile" />
                                      </div>
                                      <form id="contact-form">
                                        <div className="">
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                              <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Username: </p>
                                              <input type="text" name="username" style={{ textTransform: 'none' }} value={username} disabled />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>First Name: </p>
                                              <input type="text" name="firstName" style={{ textTransform: 'none' }} placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Last Name: </p>
                                              <input type="text" name="lastName" style={{ textTransform: 'none' }} placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Email: </p>
                                              <input type="email" name="email" style={{ textTransform: 'none' }} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                          </div>
                                          <div className="col-lg-12" style={{ marginTop: '70px' }}>
                                            <div className="submit-info">
                                              <button className="btn" type="submit">Save changes</button>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          )}
                          {selectedCategory === 1 && (
                            <p>HELLOOOOOOOO</p>
                          )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProfilePage