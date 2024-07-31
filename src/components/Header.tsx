import React, { useEffect } from 'react';
import logo from '../../assets/img/logo/logo.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = $(window).scrollTop() as number;
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $("#back-top").fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $("#back-top").fadeIn(500);
      }
    };

    $(window).on("scroll", handleScroll);

    $("#back-top a").on("click", (e) => {
      e.preventDefault();
      $("body,html").animate({ scrollTop: 0 }, 800);
    });

    // Clean up event listeners on component unmount
    return () => {
      $(window).off("scroll", handleScroll);
      $("#back-top a").off("click");
    };
  }, []);

  return (
    <>
      <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
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
                      <a href="from.html" className="btn header-btn">Become a member</a>
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
      <div id="back-top">
        <a title="Go to Top" href="#"><i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  );
};

export default Header;
