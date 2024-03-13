import { Fragment } from 'react'

import './App.css'

import LandingPage from './components/landing';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

function App() {
  return (
    <Fragment>
      <LandingPage />
      <About />
      <Services />
      <Contact/>
    </Fragment>
  )
}

export default App
