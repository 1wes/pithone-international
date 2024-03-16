import { Fragment } from 'react'

import './App.css'

import LandingPage from './components/landing';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Extra from './components/extra';
import Footer from './components/footer';
import Testimonials from './components/testimonial';

function App() {
  return (
    <Fragment>
      <LandingPage />
      <About />
      <Services />
      <Testimonials/>
      <Contact />
      <Extra />
      <Footer/>
    </Fragment>
  )
}

export default App
