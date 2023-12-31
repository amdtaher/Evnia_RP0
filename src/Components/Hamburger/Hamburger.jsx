import React from 'react'
import { Container } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';


const SideBar = () => {
  return (
    <>
      <Container fluid={true} className="p-0">   
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="../../Components/About/About">About</a>
          <a id="contact" className="menu-item" href='reviews'>Reviews</a>
          <a className="menu-item--small" href="">Settings</a>
        </Menu>
    </Container>
  
    </>
  )
}

export default SideBar