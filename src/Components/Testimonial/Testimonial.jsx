import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import profile1 from "../../assets/img/profile1.jpg";
import profile2 from "../../assets/img/profile2.jpg";
import profile3 from "../../assets/img/profile3.jpg";
import { motion } from 'framer-motion';

// Prev & Next Button
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", color: "white", borderRadius: '50%' }}
            onClick={onClick}
        >
            <h1>hello</h1>
            <FontAwesomeIcon icon={faQuoteRight} />
        </div>
    );
}
    
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", color: "black",borderRadius: '50%'}}
            onClick={onClick}
        />
        );
    }

const Testimonial = () => {
    let settings = {
        lazyLoad: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        ],
    };

    const testimonial = {
        default:{
            opacity: 0,
            },
        fade:{
            opacity: 1,
            transition: {
                delay: 13,
                duration: 1.5,
                ease: 'easeInOut', 
                }
        }
    }

  return (
    <>
        <motion.div
        variants={testimonial}
        initial='default'
        animate='fade'
        >
            <Container className="testimonialMain text-center pyb-5" id='testimonial'>
            <Row>
            <Col sm={12}>
                <div className="section" sm={12} md={12} lg={12}>
                <h4 className="sectionTitle">what clients say</h4>
                <p className="sectionSubTitle">list of feedbacks from clients</p>
                <span className="sectionBorder mt-5"></span>
                </div>
            </Col>
            <Col sm={12}>
                <Slider {...settings}>
                <div className="singleTestimonial my-3">
                    <p className="feedback px-3">
                    <FontAwesomeIcon
                        className="fontAwesomeIcon px-2"
                        icon={faQuoteLeft}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis, alias minus. Aperiam sed, assumenda nihil
                    accusantium quaerat acomplice clise eclipse gutss greddy.{" "}
                    <FontAwesomeIcon
                        className="fontAwesomeIcon px-2"
                        icon={faQuoteRight}
                    />
                    </p>
                    <div className="profile mt-3">
                    <img src={profile1} alt="" className="circle profileImg" loading="lazy" />
                    <a href="#" className="profileName">
                        thomas even
                        <span className="profileSubName">geologoy</span>
                    </a>
                    </div>
                </div>
                <div className="singleTestimonial my-3">
                    <p className="feedback px-3">
                    <FontAwesomeIcon
                        className="fontAwesomeIcon px-2"
                        icon={faQuoteLeft}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis, alias minus. Aperiam sed, assumenda nihil
                    accusantium quaerat acomplice clise eclipse gutss greddy.{" "}
                    <FontAwesomeIcon
                        className="fontAwesomeIcon px-2"
                        icon={faQuoteRight}
                    />
                    </p>
                    <div className="profile mt-3">
                    <img src={profile2} alt="" className="circle profileImg" loading="lazy" />
                    <a href="#" className="profileName">
                        thomas even
                        <span className="profileSubName">geologoy</span>
                    </a>
                    </div>
                </div>
                <div className="singleTestimonial my-3">
                    <p className="feedback px-3">
                    <FontAwesomeIcon
                        className="fontAwesomeIcon px-2"
                        icon={faQuoteLeft}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis, alias minus. Aperiam sed, assumenda nihil
                    accusantium quaerat acomplice clise eclipse gutss greddy.{" "}
                    <FontAwesomeIcon
                        className="fontAwesomeIcon px-2"
                        icon={faQuoteRight}
                    />
                    </p>
                    <div className="profile mt-3">
                    <img src={profile3} alt="" className="circle profileImg" loading="lazy" />
                    <a href="#" className="profileName">
                        thomas even
                        <span className="profileSubName">geologoy</span>
                    </a>
                    </div>
                </div>
                <div className="singleTestimonial my-3">
                    <p className="feedback px-3">
                    <FontAwesomeIcon
                        className="fontAwesomeIcon px-2"
                        icon={faQuoteLeft}
                    />{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reiciendis, alias minus. Aperiam sed, assumenda nihil
                    accusantium quaerat acomplice clise eclipse gutss greddy.{" "}
                    <FontAwesomeIcon
                        className="fontAwesomeIcon px-2"
                        icon={faQuoteRight}
                    />
                    </p>
                    <div className="profile mt-3">
                    <img src={profile1} alt="" className="circle profileImg" loading="lazy" />
                    <a href="#" className="profileName">
                        thomas even
                        <span className="profileSubName">geologoy</span>
                    </a>
                    </div>
                </div>
                </Slider>
            </Col>
            </Row>
            </Container>
        </motion.div>
    </>
  );
};

export default Testimonial;
