import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hamburger from './Components/Hamburger/Hamburger'
import TopNavigation from './Components/TopNavigation/TopNavigation'
import TopFixedBannner from './Components/TopFixedBannner/TopFixedBannner'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Summary from './Components/Summary/Summary'
import Popup from './Components/Popup/Popup'
import Analysis from './Components/Analysis/Analysis'
import Todo from './Components/todo/Todo'
import Testimonial from './Components/Testimonial/Testimonial'
import Reviews from './Components/Reviews/Reviews'
import Star from './Components/Star/Star'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hamburger/>
      {/* <TopNavigation/> */}
      <TopFixedBannner/> 
      <About/>
      <Features/>
      <Summary/>
      <Popup/>
      <Analysis/>
      <Todo/>
      <Testimonial/>
      <Reviews/>
      <Star/>
      <Footer/>
    </>
  )
}

export default App
