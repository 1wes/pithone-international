import { Fragment } from 'react'

import './App.css'

import LandingPage from './components/landing';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Extra from './components/extra';
import Footer from './components/footer';

function App() {
  return (
    <Fragment>
      <LandingPage />
      <About />
      <Services />
      <Contact />
      <Extra />
      <Footer/>
    </Fragment>
  )
}

export default App
