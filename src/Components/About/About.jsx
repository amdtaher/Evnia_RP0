import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import About1 from "../../assets/img/about2.jpg"
import About2 from "../../assets/img/about1.jpg"
import { motion } from 'framer-motion';


const About = () => {
    const parentVariant = {
        parentHidden: {
            x: "-100vw",
            opacity: 0
        },
        parentVisible: {
            x: "00vw",
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1.6,
                mass: 1,
                damping: .1,
                staggerChildren: 1,
                when: "beforeChildren",
            }
        },
        parentHiddenReverse: {
            x: "100vw",
            opacity: 0
        },
        parentVisibleReverse: {
            x: "00vw",
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 3,
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
        },
        childrenVisible: {
            opacity: 1,
            transition: {
                delay: 2.2,
                duration: 1.5,
                ease: 'easeInOut', 
                }
        },
        childrenVisible2nd: {
            opacity: 1,
            transition: {
                delay: 3,
                duration: 1.5,
                ease: 'easeInOut', 
                }
        }
    }

  return (
    <>
        <motion.div
        variants={parentVariant}
        initial="parentHidden"
        animate="parentVisible"
        >
            <Container className="About pyb-10 myb-5" id='about'>
                <motion.div
                variants={parentVariant}
                initial="parentHidden"
                animate="parentVisible"
                >
                    <Row>
                        <Col sm={12} md={6} lg={6} >
                            <motion.div
                            variants={parentVariant}
                            initial="parentHiddenReverse"
                            animate="parentVisibleReverse"
                            >
                                <motion.div
                                variants={childVariant}
                                initial='childrenHidden'
                                animate='childrenVisible'
                                className="aboutContent">
                                    <h6 className="AboutTitle">JOIN THE EVENT</h6>
                                    <h1 className='AboutHeading'>We Create and <span>Turn</span> Into Reality</h1>
                                    <p className='AboutSubHeading'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <p className='AboutSubHeading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className="AboutButtons mt-3">
                                    <a href=""  className="AboutLinkOne">Read More</a>
                                    <a href="" className="AboutLinkTwo">Buy Ticket</a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </Col>
                        <Col sm={12} md={6} lg={6} >
                                <div className="AboutImages">
                                    <div className='aboutImg'>
                                        <img className='img1'  src={About1} alt="About1"/>
                                        <img className='img2' src={About2} alt="About2"/>
                                        <motion.a
                                        variants={childVariant}
                                        initial='childrenHidden'
                                        animate='childrenVisible2nd'
                                        href="" className='AboutImageLink'>Explore More About</motion.a>
                                        <motion.span
                                        variants={childVariant}
                                        initial='childrenHidden'
                                        animate='childrenVisible2nd'
                                        ></motion.span>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </motion.div>
    </>
  )
}

export default About