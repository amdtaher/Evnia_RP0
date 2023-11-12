import React, { Fragment ,useState, useEffect} from 'react'
import "../../assets/css/custom.css"
import "../../assets/css/bootstrap.min.css"
import { Container,Nav,Navbar} from 'react-bootstrap'

const TopNavigation = () => {
const [scroll, setScroll] = useState(
  {
    navBg: "navBg",
    navLogo: "navLogo",
    navItem: "navItem"
  }
);
const scrolling = ()=>{
  if(window.scrollY>550){
    setScroll(
      {
        navBg: 'navBgScroll',
        navLogo: 'navLogoScroll',
        navItem: 'navItemScroll'
      }
    )
  }else if(window.scrollY<550){
    setScroll(
      {
        navBg: 'navBg',
        navLogo: 'navLogo',
        navItem: 'navItem'
      }
    )
  }
};
useEffect(
  ()=>{
    window.addEventListener("scroll", scrolling);
  },[]
);
  return (
    <Fragment>
    <Navbar className={scroll.navBg} expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className={scroll.navLogo}>Infinitys Flame</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home" className={scroll.navItem}>Home</Nav.Link>
            <Nav.Link href="#about" className={scroll.navItem}>About</Nav.Link>
            <Nav.Link href="#gellery" className={scroll.navItem}>Gallery</Nav.Link>
            <Nav.Link href="#blog" className={scroll.navItem}>Blog</Nav.Link>
            <Nav.Link href="#contact" className={scroll.navItem}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  )
}

export default TopNavigation