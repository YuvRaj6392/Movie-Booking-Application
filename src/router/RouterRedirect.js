import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../screens/home/Home'
import Detail from '../screens/details/Detail'
export default function RouterRedirect() {
  return (
    <div>
      <Router>
      <div>
      </div>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  )
}
