import React from 'react'
import Hamburger from '../../Components/Hamburger/Hamburger'
import TopFixedBannner from '../../Components/TopFixedBannner/TopFixedBannner'
import Reviews from '../../Components/Reviews/Reviews'
import Star from '../../Components/Star/Star'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Footer from '../../Components/Footer/Footer'

const TestimonialsPage = () => {
  return (
    <>
      <Hamburger/>
      <TopFixedBannner/> 
      <Testimonial/>
      <Reviews/>
      <Star/>
      <Footer/>
    </>
  )
}

export default TestimonialsPage