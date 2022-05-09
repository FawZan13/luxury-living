import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="text-white py-3 pb-5 bg-dark mt-5">
                <Container className=" mt-5">
                    <Row className="row">
                        <div alt="" className="col-12 col-md-3 d-flex  justify-content-center text-decoration-none text-white">
                            <p style={{ fontSize: '14px' }}><i className="mx-1 bi bi-geo-alt-fill"></i>H#000 (0th Floor), Road #00,<br />
                                New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                        </div>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Company</li>
                            <div style={{ fontSize: '14px' }}>
                                <li className="">About</li>
                                <li className="">Project</li>
                                <li className="">Our Team</li>
                                <li className="">Terms & Conditions</li>
                                <li className="">Submit Listing</li>
                            </div>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Quick Links</li>
                            <div style={{ fontSize: '14px' }}>
                                <li className="">Quick Links</li>
                                <li className="">Rentals</li>
                                <li className="">Sales</li>
                                <li className="">Contact</li>
                                <li className="">Our blog
                                </li>
                            </div>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">About us</li>
                            <p style={{ fontSize: '12px' }} className="my-3">Lorem ipsum dolor sit amet, consectetur<br />
                                adipiscing elit. Purus commodo ipsum<br />
                                duis laoreet maecenas. Feugiat </p>
                            <li className="d-flex ">
                                <i className="bi bi-facebook mx-2"></i>
                                <i className="bi bi-twitter mx-2"></i>
                                <i className="bi bi-instagram mx-2"></i>
                                <i className="bi bi-youtube mx-2"></i>
                            </li>
                        </ul>
                    </Row>
                </Container>
            </footer>
        </div >
    );
};

export default Footer;