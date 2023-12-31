import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BarChart, XAxis, Bar, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from 'framer-motion';

const data = [
  {name: "marraige", program: 20},
  {name: "birthday", program: 40},
  {name: "yellow", program: 20},
  {name: "event", program: 27},
  {name: "engagement", program: 18},
  {name: "baby shower", program: 11},
  {name: "propose", program: 34},
];

const Analysis = () => {
  const analysis = {
    default:{
      width:0,
      height: 5,
      opacity: 0,
      background: 'white'
    },
    stretch:{
      width: 480,
      opacity: 1,
      transition: {
        delay: 9,
        duration: 2,
        ease: 'easeInOut', 
      }
    }
  }

  return (
    <>
      <Container fluid={true} className="analysisBanner p-0">
        <div className="analysisBannerOverlay">
          <Container className="SummaryMain pyb-10">
            <Row className="align-items-center justify-content-center">
              <Col sm={12} md={6} lg={12}>
                <div className="section text-center text-white" sm={12} md={12} lg={12}>
                  <h4 className="sectionTitle">Describing Chart Bar</h4>
                  <motion.span
                  variants={analysis}
                  initial="default"
                  animate="stretch"
                  className="analysisSectionBorder"></motion.span>
                  </div>
              </Col>
              <Col
                className="barChart"
                style={{ width: "60%", height: "550px" }}
                sm={12}
                md={6}
                lg={12}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Tooltip/>
                    <XAxis dataKey="name" />
                    <Bar dataKey="program" fill="#08b9ff" />
                  </BarChart>
                </ResponsiveContainer>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Analysis;
