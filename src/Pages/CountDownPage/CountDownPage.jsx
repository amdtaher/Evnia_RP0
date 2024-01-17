import React from 'react'
import Hamburger from '../../Components/Hamburger/Hamburger'
import TopFixedBannner from '../../Components/TopFixedBannner/TopFixedBannner'
import Summary from '../../Components/Summary/Summary'
import Features from '../../Components/Features/Features'
import Popup from '../../Components/Popup/Popup'
import Footer from '../../Components/Footer/Footer'

const CountDownPage = () => {
  return (
    <>
      <Hamburger/>
      <TopFixedBannner/> 
      <Features/>
      <Popup/>
      <Summary/>
      <Footer/>
    </>
  )
}

export default CountDownPage