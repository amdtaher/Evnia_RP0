import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../assets/css/custom.css';
import { FaCompass, FaCalendar, FaFacebook, FaPlay } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/img/featureBanner.jpg';
import ReactPlayer from 'react-player';

const Banner = () => {
  const [day, setDay] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  
  useEffect(()=>{
    const timer = ()=>{
      const d = new Date();
      setDay(d.getDate());
      setHours(d.getHours());
      setMinutes(d.getMinutes());
      setSeconds(d.getSeconds());  
    }
    timer();

    const interv = setInterval(timer ,1000)
    return ()=>{clearInterval(interv)};
  }, [])

  return (
    <>
      <Container fluid={true} className='bannerMain bg p-0'>
        <div className='bannerOverlay'>
        <Container className='bannerContent'>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className='banner'>
                <span className='bannerSubHeading'>are you <span>ready</span> to attend?</span>
                <h2 className='bannerHeading'>world advanced <span>biggest</span><br/>conference
                <ul>
                  <li>2</li>
                  <li>0</li>
                  <li>2</li>
                  <li>4</li>
                </ul>
                </h2>
                <ul className='placeNdate'>
                  <li><FaCompass className='me-2 primaryColor'/> yellow street, united state</li>
                  <li><FaCalendar className='me-2 primaryColor'/> 25-30 jan, 2024</li>
                </ul>
                <ul className='bannerButtons'>
                  <li><a href="#">buy tickets now!</a></li>
                  <li><a href="#" onClick={handleShow}><FaPlay className='me-3'/> watch promo video</a></li>
                </ul>
                <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center">Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="mx-auto my-5">
                        <img src={image} alt="" />
                        <ReactPlayer className="mt-3 mx-auto" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ul className='countDown'>
                  <li><span id='day'>{day}</span> jan</li>
                  <li><span id='hour'>{hours}</span> hours</li>
                  <li><span id='minute'>{minutes}</span> minutes</li>
                  <li><span id='second'>{seconds}</span> seconds</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      </Container>
    </>
  )
}

export default Banner
