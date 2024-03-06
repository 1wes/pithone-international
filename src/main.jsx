import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import ComingSoon from './components/counter.jsx'

import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ComingSoon/>} ></Route>
      <Route path='/home' element={<App/>} ></Route>
    </Routes>
  </BrowserRouter>,
)
