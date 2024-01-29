import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaCompass, FaCalendar, FaPlay } from 'react-icons/fa';
import { Player, BigPlayButton, ControlBar, ReplayControl, ForwardControl } from 'video-react';
import 'react-modal-video/scss/modal-video.scss';
import 'video-react/dist/video-react.css';

const TopFixedBanner = () => {
  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [modalShow, setModalShow] = useState(false);

  const targetDate = new Date('2024-02-21T00:00:00');

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });
    } else {
      // Set remaining time to zero if the target date has passed
      setRemainingTime({ days: 'D', hours: 'O', minutes: 'N', seconds: 'E' });
    }
  };

  useEffect(() => {
    calculateTimeRemaining();

    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            <BigPlayButton position="center" />
            <ControlBar autoHide={false}>
              <ReplayControl seconds={30} order={2.3} />
              <ForwardControl seconds={30} order={3.3} />
            </ControlBar>
          </Player>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <Container fluid className="bannerMain bg p-0">
        <div className="bannerOverlay">
          <Container className="bannerContent">
            <Row>
              <Col sm={12} md={12} lg={12}>
                <div className="banner">
                  <span className="bannerSubHeading">
                    are you <span>ready</span> to attend?
                  </span>
                  <h2 className="bannerHeading">
                    world advanced <span>biggest</span>
                    <br />
                    conference
                    <ul>
                      <li>2</li>
                      <li>0</li>
                      <li>2</li>
                      <li>4</li>
                    </ul>
                  </h2>
                  <ul className="placeNdate">
                    <li>
                      <FaCompass className="me-2 primaryColor" /> yellow street, united state
                    </li>
                    <li>
                      <FaCalendar className="me-2 primaryColor" /> 25-30 Dec, 2024
                    </li>
                  </ul>
                  <ul className="bannerButtons">
                    <li>
                      <a href="#buy-tickets">buy tickets now!</a>
                    </li>
                    <li>
                      <button className='videoButton' onClick={() => setModalShow(true)}>
                        <FaPlay />
                      </button>
                    </li>
                  </ul>
                  <ul className="countDown">
                    <li className='day'>
                      <span id="day">{remainingTime.days}</span>
                      <h4 className='countName'>days</h4>
                    </li>
                    <li>
                      <span id="hour">{remainingTime.hours}</span>
                      <h4 className='countName'>hours</h4>
                    </li>
                    <li>
                      <span id="minute">{remainingTime.minutes}</span>
                      <h4 className='countName'>minutes</h4>
                    </li>
                    <li>
                      <span id="second">{remainingTime.seconds}</span>
                      <h4 className='countName'>seconds</h4>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default TopFixedBanner;
