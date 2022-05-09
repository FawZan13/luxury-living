import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <div id="about">
            <Container>
                <Row className="">
                    <Col sm={12} md={6} lg={6} className="">
                        <Container className="mt-5 pt-5">
                            <h1 className="mt-5">We Build <br />Your Dream</h1>
                            <p>Online Easte Agency, the mordern way to sell your own home,<br /> You can use Griffin Residential to market your property</p>
                            <Button className="" style={{ background: '#30336b' }}>Booking</Button>
                        </Container>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Container>
                            <img className="w-100 py-5" src="https://i.ibb.co/bR5vYcM/pierre-chatel-innocenti-Al-Sl-E8-IAj-Zo-unsplash-1.png" alt="" />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;