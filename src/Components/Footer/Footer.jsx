import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaHome, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
        <Container fluid={true} className='footerMain pyb-5'>
            <Container className='footer'>
                <Row>
                    <Col>
                        <div className='footerLeft'>
                        <h4 className='mb-3'>Vanue Location</h4>
                        <ul className='footerUl'>
                            <li><a href="#"><FaHome className='me-2'/> 23-27 Jan, 2024</a></li>
                            <li><a href="#"><FaHome className='me-2'/> yellow-green street, USA</a></li>
                            <li><a href="#"><FaHome className='me-2'/> +880 123 4567 7890</a></li>
                        </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className='footerRight'>
                            <h4 className='mb-3'>Social Connection</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem repellendus quisquam, nesciunt ab itaque ipsam quidem dolores quaerat similique voluptatibus.</p>
                            <ul className='footerSocial'>
                                <li><a href="#"><FaFacebook className='me-2' size={30}/></a></li>
                                <li><a href="#"><FaInstagram className='me-2' size={30}/></a></li>
                                <li><a href="#"><FaTwitch className='me-2' size={30}/></a></li>
                                <li><a href="#"><FaYoutube className='me-2' size={30}/></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Row>
                        <Col>
                            <div className='footerBottom text-center'>
                                <h4>Evnia</h4>
                                <ul className='footerBottomUl'>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                                <p>Copyright  2022 Evnia. All rights reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Container>
    </>
  )
}

export default Footer