import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Dashboard = () => {
    const { admin } = useAuth();


    return (
        <section>
            <Navigation />
            <Row>
                <Col style={{ height: "100vh", background: "white" }} xs={12} md={3} className="  text-light py-5">
                    <div>
                        <ul className="list-unstyled">

                            {admin ? (
                                <>
                                    <li>
                                        <Link style={{ textDecoration: "none", color: "black" }}
                                            className=""
                                            to={`/dashboard/makeAdmin`}
                                        >
                                            <h5 className="text-center my-3">Make Admin</h5>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ textDecoration: "none", color: "black" }}
                                            className=""
                                            to={`/dashboard/addService`}
                                        >
                                            <h5 className="text-center my-3">Add Service</h5>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ textDecoration: "none", color: "black" }}
                                            className=""
                                            to={`/dashboard/manageBookings`}
                                        >
                                            <h5 className="text-center my-3">Manage Bookings</h5>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>

                                    <li>
                                        <Link style={{ textDecoration: "none", color: "black" }}
                                            className=""
                                            to={`/dashboard/addReview`}
                                        >
                                            <h5 className="text-center my-3">Add Review</h5>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ textDecoration: "none", color: "black" }}
                                            className=""
                                            to={`/dashboard/myBookings`}
                                        >
                                            <h5 className="text-center my-3">My Bookings</h5>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={9} className="py-5" style={{ background: "#F5F6FA" }}>
                    <Outlet />
                </Col>
            </Row>
        </section>
    );
};

export default Dashboard;