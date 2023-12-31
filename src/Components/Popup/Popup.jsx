import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/img/featureBanner.jpg';
import ReactPlayer from 'react-player';

const Popup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="pyb-5">
                <div className="text-center">
                <Button variant="primary" onClick={handleShow} className="p-5">
                    Launch demo modal <FontAwesomeIcon className="Coffee" onClick={handleShow} icon={faMagic} size="2xl" />
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
            </div>
        </>
    )
}

export default Popup;
