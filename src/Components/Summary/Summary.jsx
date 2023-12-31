import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Container, Row, Col} from 'react-bootstrap';

const Summary = () => {
  return (
    <>
        <Container fluid={true} className='SummaryBanner p-0 myb-5' id='count'>
            <div className='SummaryBannerOverlay'>
                <Container className='Summary pyb-10'>
                    <Row>
                        <Col sm={12} md={6} lg={3} className='col'>
                            <div className='SingleSummary'>
                                <h4 className='SummaryHeading s1'>
                                    <CountUp start={0} end={60} duration={5} suffix="+">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedcall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                    </CountUp>
                                </h4>
                                <p className='SummarySubHeading'>Project Finished</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='col'>
                            <div className='SingleSummary'>
                                <h4 className='SummaryHeading s2'>
                                    <CountUp start={0} end={40} duration={5} suffix="+">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedcall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                    </CountUp>
                                </h4>
                                <p className='SummarySubHeading'>Feedbacks</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='col'>
                            <div className='SingleSummary'>
                                <h4 className='SummaryHeading s3'>
                                    <CountUp start={0} end={50} duration={5} suffix="+">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedcall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                    </CountUp>
                                </h4>
                                <p className='SummarySubHeading'>Happy Clients</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='col'>
                            <div className='SingleSummary'>
                                <h4 className='SummaryHeading s4'>
                                    <CountUp start={0} end={5} duration={6} suffix="+">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedcall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                    </CountUp>
                                </h4>
                                <p className='SummarySubHeading'>Stars Given</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    </>
  )
}

export default Summary