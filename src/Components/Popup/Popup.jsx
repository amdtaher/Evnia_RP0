import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAnchor } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/img/featureBanner.jpg';
import ReactPlayer from 'react-player';

const Popup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <div className="text-center py-5">
            <FontAwesomeIcon className="Coffee" onClick={handleShow} icon={faCoffee} size="2xl" />
            <FontAwesomeIcon className="Coffee" onClick={handleShow} icon={faAnchor} size="2xl" />
            <FontAwesomeIcon className="Coffee" onClick={handleShow} icon={faCoffee} size="2xl" />
            <FontAwesomeIcon className="Coffee" onClick={handleShow} icon={faAnchor} size="2xl" />
            </div>

            {/* <div style={{ width: '100%', maxWidth: '1900px' }}>
                <Player
                    poster={image}
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    fluid={true}
                    width="100%"
                >
                    <BigPlayButton position="center" />
                    <ControlBar autoHide={false} className="my-class"/>
                </Player>
            </div> */}

            <div className="text-center">
            <Button variant="primary" onClick={handleShow} className="p-5">
                Launch demo modal
            </Button>
            </div>
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
        </Fragment>
    )
}

export default Popup;
