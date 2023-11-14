import React, { Fragment } from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import music from "../../assets/img/icon.png";

const Features = () => {
 return (
    <Fragment>
        <Container fluid={true} className="FeaturesBanner p-0">
            <div className="FeaturesBannerOverlay">
                <Container className="FeaturesContent text-center">
                    <Row>
                    <Col>
                            <Card className='SingleCard' style={{ width: '18rem' }}>
                                <Card.Img variant="top" className='mb-1' src={music} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text className='my-3'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                            <Card className='SingleCard' style={{ width: '18rem' }}>
                                <Card.Img variant="top" className='mb-1' src={music} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text className='my-3'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                            <Card className='SingleCard' style={{ width: '18rem' }}>
                                <Card.Img variant="top" className='mb-1' src={music} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text className='my-3'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                            <Card className='SingleCard' style={{ width: '18rem' }}>
                                <Card.Img variant="top" className='mb-1' src={music} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text className='my-3'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    </Fragment>
  );
};

export default Features;
