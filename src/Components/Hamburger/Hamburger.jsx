import React, { Fragment } from 'react'
import { Container,Nav } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';
import reviews from '../Reviews/Reviews';


const SideBar = () => {
      
  return (
    <Fragment>
     <Container fluid={true} className="p-0">  
        
     <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="../../Components/About/About">About</a>
        <a id="contact" className="menu-item" href={reviews}>Reviews</a>
        <a className="menu-item--small" href="">Settings</a>
      </Menu>
    </Container>
  
    </Fragment>
  )
}

export default SideBar