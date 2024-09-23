import React from 'react'
import LandingPage from './swiggy/pages/LandingPage'
import ProductMenu from './swiggy/components/ProductMenu'
import {Routes, Route} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element = {<ProductMenu />} />
      </Routes>
      
    </div>
  )
}

export default App
