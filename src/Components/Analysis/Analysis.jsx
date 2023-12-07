import React from "react";
import { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BarChart, XAxis, Bar, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "marraige",
    program: 20,
  },
  {
    name: "birthday",
    program: 40,
  },
  {
    name: "yellow",
    program: 20,
  },
  {
    name: "event",
    program: 27,
  },
  {
    name: "engagement",
    program: 18,
  },
  {
    name: "baby shower",
    program: 11,
  },
  {
    name: "propose",
    program: 34,
  },
];

const Analysis = () => {
  return (
    <Fragment>
      <Container fluid={true} className="FeaturesFixedBanner my-5 bg-black">
        <div className="FeaturesBannerOverlay">
          <Container className="SummaryMain py-5">
            <Row className="align-items-center justify-content-center">
              <Col sm={12} md={6} lg={12}>
                <h1 className="text-capitalize text-center pb-5 text-white">described bar chart</h1>
              </Col>
              <Col
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
    </Fragment>
  );
};

export default Analysis;
