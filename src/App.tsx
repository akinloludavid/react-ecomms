import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import { baseUrl } from './config/config'
import Pages from './routes'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Pages />
    </Router>
  )
}

export default App
