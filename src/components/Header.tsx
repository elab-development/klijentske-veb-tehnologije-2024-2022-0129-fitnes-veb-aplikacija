import React from 'react'
import logo from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="header-area header-transparent">
            <div className="main-header header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                                <Link to="/"><img src={logo} alt=""/></Link>
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
                                            <li><a href="schedule.html">schedule</a></li>
                                            <li><a href="gallery.html">gallery</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                    <a href="from.html" className="btn header-btn">became a member</a>
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
  )
}

export default Header