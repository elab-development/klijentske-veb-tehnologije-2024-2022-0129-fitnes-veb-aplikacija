import React from 'react'
import logo from '../../assets/img/logo/logo.png'

const Header = () => {
  return (
    <header>
        <div className="header-area header-transparent">
            <div className="main-header header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                                <a href="index.html"><img src={logo} alt=""/></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                            <div className="menu-main d-flex align-items-center justify-content-end">
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="programs.html">Programs</a></li>
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