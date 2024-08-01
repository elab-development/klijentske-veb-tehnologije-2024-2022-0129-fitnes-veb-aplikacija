import React, { useState, useEffect, lazy, Suspense } from 'react';

import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/slicknav.css';
import '../assets/css/flaticon.css';
import '../assets/css/gijgo.css';
import '../assets/css/animate.min.css';
import '../assets/css/animated-headline.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/themify-icons.css';
import '../assets/css/slick.css';
import '../assets/css/nice-select.css';

import '../assets/scss/_about.scss';
import '../assets/scss/_blog_page.scss';
import '../assets/scss/_bradcam.scss';
import '../assets/scss/_color.scss';
import '../assets/scss/_common.scss';
import '../assets/scss/_contact.scss';
import '../assets/scss/_contact_form.scss';
import '../assets/scss/_date_tabs.scss';
import '../assets/scss/_elements.scss';
import '../assets/scss/_extend.scss';
import '../assets/scss/_footer.scss';
import '../assets/scss/_gallery.scss';
import '../assets/scss/_h1-hero.scss';
import '../assets/scss/_headerMenu.scss';
import '../assets/scss/_mixins.scss';
import '../assets/scss/_overlay.scss';
import '../assets/scss/_pagination.scss';
import '../assets/scss/_services.scss';
import '../assets/scss/_services_section.scss';
import '../assets/scss/_team.scss';
import '../assets/scss/_testimonial.scss';
import '../assets/scss/_variables.scss';
import '../assets/scss/_wantTowork.scss';
import '../assets/scss/style.scss';

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Routes
} from "react-router-dom";

import Preloader from './components/Preloader';
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const ProgramsBody = lazy(() => import('./components/ProgramsBody'));
const IndexBody = lazy(() => import('./components/IndexBody'));
const GalleryBody = lazy(() => import('./components/GalleryBody'));
const AboutBody = lazy(() => import('./components/AboutBody'));
const ContactBody = lazy(() => import('./components/ContactBody'));


const App: React.FC = () => {
  
let router = createBrowserRouter(
    createRoutesFromElements([
    <>
        <Route path='/' element={<Suspense fallback={<Preloader />}><Header/><IndexBody/><Footer/></Suspense>}/>
        <Route path='/programs' element={<Suspense fallback={<Preloader />}><Header/><ProgramsBody/><Footer/></Suspense>}/>
        <Route path='/about' element={<Suspense fallback={<Preloader />}><Header/><AboutBody/><Footer/></Suspense>}/>
        <Route path='/gallery' element={<Suspense fallback={<Preloader />}><Header/><GalleryBody/><Footer/></Suspense>}/>
        <Route path='/contact' element={<Suspense fallback={<Preloader />}><Header/><ContactBody/><Footer/></Suspense>}/>
    </>
    ])
);

return (
    <RouterProvider router={router} fallbackElement={<Preloader></Preloader>} />
  )
}

export default App
