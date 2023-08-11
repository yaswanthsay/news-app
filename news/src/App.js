import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import NewsDetails from './components/NewsDetails'

function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/newsDetails' element={<NewsDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
