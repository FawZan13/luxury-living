import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyBookings = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();

    const email = user.email;
    useEffect(() => {
        fetch(`https://lit-earth-64704.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [control]);
    const handleDelete = (id) => {
        alert('Do you want to delete this item?');
        fetch(`https://lit-earth-64704.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
    };
    return (
        <div>
            <Container>

                {orders.length === 0 ?
                    <Spinner animation="border" variant="warning" />
                    :

                    <Row xs={1} md={2} lg={2} className="g-4 p-4 p-md-0" >
                        {
                            orders.map(order => <Col key={order._id} order={order}>
                                <Card style={{ width: '24rem' }} className="">
                                    {/* <Card.Img variant="top" className="px-5 " src={`data:image/png;base64,${order.image}`} style={{ height: "50px", width: "100%" }} /> */}
                                    <div>
                                        <Button onClick={() => handleDelete(order?._id)} variant="danger">Cancel</Button>
                                    </div>
                                    <Card.Body style={{ height: '160px' }}>
                                        <Card.Title className=""><h4>{order.name}</h4></Card.Title>
                                        <Card.Text className="">
                                            {order.description}
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

export default MyBookings;