import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div id="services">
            <h6 className="text-center mt-5 mb-4">Our Services</h6>
            <h2 className="text-center mb-5">We re an agency tailored to all<br />

                clients needs that always delivers</h2>
            <Container>

                {service.length === 0 ?
                    <Spinner animation="border" variant="warning" />
                    :

                    <Row xs={1} md={2} lg={3} className="g-4 p-4 p-md-0" >
                        {
                            service.map(service => <Col key={service._id} service={service}>
                                <Card style={{ width: '18rem' }} className="text-center">
                                    <Card.Img variant="top" className="px-5" src={`data:image/png;base64,${service.image}`} />
                                    <Card.Body style={{ height: '220px' }}>
                                        <Card.Title className="text-center">{service.name}</Card.Title>
                                        <Card.Text className="text-center">
                                            {service.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }

                    </Row>


                }
            </Container>
        </div>
    );
};

export default Services;