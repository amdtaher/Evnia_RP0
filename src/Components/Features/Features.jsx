import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import music from "../../assets/img/icon.png";
import { motion } from 'framer-motion';

const Features = () => {
  const parentVariant = {
    parentHidden: {
        opacity: 0
    },
    parentVisible: {
        opacity: 1,
        transition: {
            duration: 1.6,
            mass: 1,
            damping: .1,
            staggerChildren: 1,
            when: "beforeChildren",
        }
    }
  }
  const childVariant = {
      childrenHidden: {
          opacity: 0,
          y: '-10vh'
      },
      childrenVisible: {
          opacity: 1,
          y: '0vh',
          transition: {
              delay: .5,
              duration: 1,
              ease: 'easeInOut', 
              }
      }
  }

  return (
    <>
      <motion.div
      variants={parentVariant}
      viewport={false}
      initial="parentHidden"
      whileInView="parentVisible"
      className="pyb-5"
      >
        <Container fluid={true} className="FeaturesBanner p-0" id='features'>
          <div className="FeaturesBannerOverlay py-10">
            <Container className="FeaturesContent text-center">
              <motion.div
              variants={childVariant}
              viewport={false}
              initial='childrenHidden'
              whileInView='childrenVisible'
              >
                <Row>
                  <Col>
                    <Card className="SingleCard" style={{ width: "18rem", marginBlock: '10px', border: 'none' }}>
                      <Card.Img variant="top" className="mb-1" src={music} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text className="my-3">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="SingleCard" style={{ width: "18rem", marginBlock: '10px', border: 'none' }}>
                      <Card.Img variant="top" className="mb-1" src={music} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text className="my-3">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="SingleCard" style={{ width: "18rem", marginBlock: '10px', border: 'none' }}>
                      <Card.Img variant="top" className="mb-1" src={music} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text className="my-3">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="SingleCard" style={{ width: "18rem", marginBlock: '10px', border: 'none' }}>
                      <Card.Img variant="top" className="mb-1" src={music} />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text className="my-3">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </motion.div>
            </Container>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Features;
