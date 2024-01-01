import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import pdf from '../../assets/img/Taher_Ahmed.pdf'
import { motion } from 'framer-motion'

const TopFixedBannner = () => {
  return (
    <>
        <Container fluid={true} className="TopFixedBanner p-0" id='home'>
          <div className="TopBannerOverlay" >
            <Container className="BannerContent text-center">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <div className="Banner">
                    <motion.h1 
                    initial={{color: 'white'}}
                    viewport={false}
                    whileInView={{color: 'red'}}
                    transition={{delay: .5, duration: 1.5}}
                    className='BannerTitle'>Welcome our Website</motion.h1>
                    <p className="BannerSubTitle">Lorem ipsum dolor sit amet.</p>
                    
                    <Button className='px-4 py-2' variant= "success">Send</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
    </>
  )
}

export default TopFixedBannner