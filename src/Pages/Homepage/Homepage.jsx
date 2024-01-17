import React, { Fragment, useState, useEffect } from 'react';
import '../../assets/css/custom.css';
import Loader from '../../Components/Loader/Loader';
import Hamburger from '../../Components/Hamburger/Hamburger'
import TopFixedBannner from '../../Components/TopFixedBannner/TopFixedBannner'
import About from '../../Components/About/About'
import Features from '../../Components/Features/Features'
import Summary from '../../Components/Summary/Summary'
import Popup from '../../Components/Popup/Popup'
import Analysis from '../../Components/Analysis/Analysis'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Reviews from '../../Components/Reviews/Reviews'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/TopNavigation/TopNavigation'

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
        {/* <NavBar/> */}
      <Hamburger/>
      <TopFixedBannner/> 
      <About/>
      <Features/>
      <Popup/>
      <Summary/>
      <Analysis/>
      <Testimonial/>
      <Reviews/>
      <Footer/>
        </>
      )}
    </Fragment>
  );
};

export default Homepage;
