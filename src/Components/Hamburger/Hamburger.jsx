import React from 'react'
import { Container } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
      <Container fluid={true} className="p-0">   
        <Menu>
        <NavLink to='/' className='link fs-5 fw-semibold text-decoration-none' activeClassName="active">Home</NavLink>
        <NavLink to='/about' className='link fs-5 fw-semibold text-decoration-none'>About</NavLink>
        <NavLink to='/barchart' className='link fs-5 fw-semibold text-decoration-none'>BarChart</NavLink>
        <NavLink to='/countdown' className='link fs-5 fw-semibold text-decoration-none'>CountDown</NavLink>
        <NavLink to='/testimonial' className='link fs-5 fw-semibold text-decoration-none'>Testimonial</NavLink>
        </Menu>
    </Container>
  
    </>
  )
}

export default SideBar