import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
    return (
        <div className="mt-5" id="projects">
            <div className="text-center mt-5">
                <h6>Projects</h6>
                <h2>Discover the latest Interior Design<br /> available today</h2>
            </div>
            <Container className="mt-5">
                <Row className="mt-2">
                    <Col sm={12} md={6} lg={4} className="p-2">

                        <img className="w-100" height="340px" src="https://i.ibb.co/x6yx789/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png" alt="" />
                        <div className="text-center">
                            <h5 className="mt-4">Villa on Washington Avenue</h5>
                            <p><i className="bi bi-geo-alt-fill"></i>Dhaka, Bangladesh</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="p-2">

                        <img className="w-100" height="340px" src="https://i.ibb.co/9VVxssX/Mask-Group.png" alt="" />
                        <div className="text-center">
                            <h5 className="mt-4">Luxury villa in Rego Park</h5>
                            <p><i className="bi bi-geo-alt-fill"></i>Dhaka, Bangladesh</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="p-2">

                        <img className="w-100" height="340px" src="https://i.ibb.co/JzwkQv7/Mask-Group-1.png" alt="" />
                        <div className="text-center">
                            <h5 className="mt-4">Gorgeous house</h5>
                            <p><i className="bi bi-geo-alt-fill"></i>Dhaka, Bangladesh</p>
                        </div>

                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default Projects;