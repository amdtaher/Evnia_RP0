import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Homepage/Homepage'
import AboutPage from '../Pages/AboutPage/AboutPage'
import BarChartPage from '../Pages/BarChartPage/BarChartPage'
import CountDownPage from '../Pages/CountDownPage/CountDownPage'
import TestimonialsPage from '../Pages/TestimonialsPage/TestimonialsPage'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/barchart' element={<BarChartPage/>}/>
        <Route exact path='/countdown' element={<CountDownPage/>}/>
        <Route exact path='/testimonial' element={<TestimonialsPage/>}/>
      </Routes>
    </>
  )
}

export default AppRouter