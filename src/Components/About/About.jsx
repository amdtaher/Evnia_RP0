import React, { Fragment } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import About1 from "../../assets/img/about2.jpg"
import About2 from "../../assets/img/about1.jpg"

const About = () => {
  return (
    <Fragment>
        <Container className="About">
            <Row>
                <Col sm={12} md={6} lg={6} >
                    <h6 className="AboutTitle">JOIN THE EVENT</h6>
                    <h1 className='AboutHeading'>We Create and <span>Turn</span> Into Reality</h1>
                    <p className='AboutSubHeading'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p className='AboutSubHeading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="AboutButtons mt-3">
                    <a href=""  className="AboutLinkOne">Read More</a>
                    <a href="" className="AboutLinkTwo">Buy Ticket</a>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} >
                    <div className="AboutImages">
                    <img className='img1'  src={About1} alt="About1"/>
                    <img className='img2' src={About2} alt="About2"/>
                    <a href="" className='AboutImageLink'>Explore More About</a>
                    <span></span>
                    </div>
                </Col>

            </Row>

        </Container>
    </Fragment>
  )
}

export default About