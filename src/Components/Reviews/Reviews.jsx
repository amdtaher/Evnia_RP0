import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Star from '../Star/Star';
import { motion } from 'framer-motion';
import image from '../../assets/img/profile1.jpg';
import image2 from '../../assets/img/profile2.jpg';
import image3 from '../../assets/img/profile3.jpg';
import image4 from '../../assets/img/profile4.jpg';

const imageArray = [
    image,
    image2,
    image3,
    image4,
];

const nameArray = [
    'Samuel Jackson',
    'Ed Sheran',
    'Ema Watson',
    'Jason Statham'
]

const Reviews = (myPlan) => {
    const parentVariant = {
        parentHidden: {
            opacity: 0,
        },
        parentVisible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                }
        }
    }
    const childrenVariant = {
        childrenHidden: {
            x: -500,
            opacity: 0,
        },
        childrenVisible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .5,
                duration: 2,
            }
        }
    }

    const [rating, setRating] = useState([Array(4).fill(0)]);

    const changeRating = (newRate, index) => {
        const newRatings = [...rating];
        newRatings[index] = newRate;
        setRating(newRatings);
        myPlan(newRatings);
    }

  return (
    <>
        <motion.div
        variants={parentVariant}
        viewport={false}
        initial='parentHidden'
        whileInView='parentVisible'
        >
            <Container className='text-center pyb-10'>
            <div className="section">
                <h4 className='sectionTitle'>Reviews</h4>
            </div>
            <Container>
                <Row>
                    {[0, 1, 2, 3].map(
                        (index) => (
                            <Col key={index} xs={12} sm={5} md={5} lg={3} className='m-auto'>
                                <motion.div
                                variants={childrenVariant}
                                viewport={false}
                                initial='childrenHidden'
                                // animate='childrenVisible'
                                whileInView='childrenVisible'
                                >
                                    <Card style={{ width: 'auto', marginBottom: '20px', marginInline: 'auto' }}>
                                        <Card.Img variant="top" src={imageArray[index]} />
                                        <Card.Body>
                                            <Card.Title className='reviewTitle'>{nameArray[index]}</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of card's content. <b>{nameArray[index]}</b>
                                            </Card.Text>
                                            <span className='ratings'>
                                                {[1, 2, 3, 4, 5].map(
                                                    (value) => (
                                                        <Star
                                                            key={value}
                                                            filled={value <= rating[index]}
                                                            onClick={() => changeRating(value, index)}
                                                        />
                                                    ))}
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        ))}
                </Row>
            </Container>
            </Container>
        </motion.div>
    </>
  )
}

export default Reviews