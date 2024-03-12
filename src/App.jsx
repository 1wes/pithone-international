import { Fragment } from 'react'

import './App.css'

import LandingPage from './components/landing';
import About from './components/about';

function App() {
  return (
    <Fragment>
      <LandingPage />
      <About/>
    </Fragment>
  )
}

export default App
