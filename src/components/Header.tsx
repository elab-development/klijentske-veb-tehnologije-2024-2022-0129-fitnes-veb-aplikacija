import React from 'react';
import useScrollHandler from '../CustomHooks/useScrollHandler';
import logo from '../../assets/img/logo/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import { useUser } from '../contexts/UserContext';

const Header: React.FC = () => {
  const { isSticky, showBackToTop, scrollToTop } = useScrollHandler();
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header>
        <div className="header-area header-transparent">
          <div className={`main-header header-sticky ${isSticky ? 'sticky-bar' : ''}`}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/programs">Programs</Link></li>
                          <li><a href="schedule.html">Schedule</a></li>
                          <li><Link to="/gallery">Gallery</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-right-btn f-right d-none d-lg-block ml-30">
                    {user ? (
                        <div className="profile">
                          <img src={`path/to/profile/pictures/${user.id}.jpg`} alt="Profile" />
                          <button onClick={handleLogout} className="btn header-btn">Logout</button>
                        </div>
                      ) : (
                        <Link to="/login" className="btn header-btn">Become a member</Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showBackToTop && (
      <div id="back-top" className={showBackToTop ? 'show' : ''}>
        <a title="Go to Top" href="#" onClick={scrollToTop}><i className="fas fa-level-up-alt"></i></a>
      </div>
      )}
    </>
  );
};

export default Header;
