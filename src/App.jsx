import { Fragment } from 'react'

import './App.css'

import LandingPage from './components/landing';
import About from './components/about';
import Services from './components/services';

function App() {
  return (
    <Fragment>
      <LandingPage />
      <About />
      <Services/>
    </Fragment>
  )
}

export default App
