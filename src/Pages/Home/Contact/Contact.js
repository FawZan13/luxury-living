import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const publicKey = "LrCQN8M2MVRH1KOpJ";
        const serviceId = "Fawzan13";
        const templateId = "template_ysc2twk";
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                alert('Message sent successfully');
            }, (error) => {
                alert(error.text);
            });
        e.target.reset();
    };
    return (
        <div id="contact">
            <h1 data-aos="zoom-out-down" className="text-center mt-5" style={{ color: "blue" }}>Contact</h1>
            <Container>
                <Row>
                    <Col data-aos="zoom-out-right" sm={12} md={6} lg={6}>
                        <img className="w-100" src="https://i.ibb.co/zXLQ5nZ/Get-in-touch-amico.png" alt="" />
                    </Col>
                    <Col data-aos="zoom-out-left" sm={12} md={6} lg={6}>
                        <Container className="text-white mt-5 text-center">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="name" name="user_name" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <Button className="text-center" variant="outline-primary" type="Submit">Submit</Button>
                            </form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;