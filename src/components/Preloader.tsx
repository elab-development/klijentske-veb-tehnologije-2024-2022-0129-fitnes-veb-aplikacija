import React, { useEffect } from 'react'
import Loader from '../../assets/img/logo/loder.png'
import $ from 'jquery'

const Preloader = () => {
  useEffect(() => {
    const handleLoad = () => {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src={Loader} alt="Loader" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
