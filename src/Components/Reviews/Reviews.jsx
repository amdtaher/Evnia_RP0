import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Star from '../Star/Star';
import Image from '../../assets/img/profile1.jpg';

const Reviews = (myPlan) => {
    const [rating, setRating] = useState([Array(4).fill(0)]);

    const changeRating = (newRate, index) => {
        const newRatings = [...rating];
        newRatings[index] = newRate;
        setRating(newRatings);
        myPlan(newRatings);
    }
  return (
    <>
        <Container className='text-center pyb-10'>
            <div className="section">
                <h4 className='sectionTitle'>Reviews</h4>
            </div>
            <Container>
                <Row>
                    {[0, 1, 2, 3].map(
                        (index) => (
                            <Col key={index} xs={12} sm={5} md={5} lg={3} className='m-auto'>
                                <Card style={{ width: 'auto', marginBottom: '20px', marginInline: 'auto' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title className='reviewTitle'>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
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
                            </Col>
                        ))}
                </Row>
            </Container>
        </Container>
    </>
  )
}

export default Reviews