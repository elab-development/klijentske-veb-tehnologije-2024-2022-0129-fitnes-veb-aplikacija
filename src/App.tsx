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

import Header from './components/Header';
import Footer from './components/Footer';
import ProgramsBody from './components/ProgramsBody';
import ScrollUp from './components/ScrollUp';
import Preloader from './components/Preloader';

function App() {

  return (
    <>
      <Preloader></Preloader>
      <Header />
      <ProgramsBody></ProgramsBody>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  )
}

export default App
