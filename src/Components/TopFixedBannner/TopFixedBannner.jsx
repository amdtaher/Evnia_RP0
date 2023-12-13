import React, { Fragment } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'

const TopFixedBannner = () => {
  return (
    <Fragment>
        <Container fluid={true} className="TopFixedBanner p-0" id='home'>
          <div className="TopBannerOverlay" >
            <Container className="BannerContent text-center">
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <div className="Banner">
  `                 <h1 className='BannerTitle'>Welcome our Website</h1>
                    <p className="BannerSubTitle">Lorem ipsum dolor sit amet.</p>
                    <a className='BannerLink me-3' href=''>Details</a>
                    <Button className='px-4 py-2' variant= "success">Send</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
    </Fragment>
  )
}

export default TopFixedBannner