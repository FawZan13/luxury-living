import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://lit-earth-64704.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="pt-3 pb-5 mt-5" style={{ background: '#F6F6F6' }}>
            <h4 className="text-center mt-5 mb-5">Testimonials</h4>
            <Container>

                {reviews.length === 0 ?
                    <Spinner animation="border" variant="warning" />
                    :

                    <Row xs={1} md={2} lg={3} className="g-4 p-4 p-md-0" >
                        {
                            reviews.map(review => <Col key={review._id} service={review}>
                                <Card style={{ width: '18rem' }} className="text-center">
                                    <Card.Body style={{ height: '220px' }}>
                                        <Card.Title className="text-center">{review.name}</Card.Title>
                                        <Card.Text className="text-center">
                                            {review.review}
                                        </Card.Text>
                                        <div>
                                            {/* {
                                                review.number === 5 && <i class="bi bi-star-fill"></i> * 5
                                            } */}
                                        </div>
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

export default Reviews;