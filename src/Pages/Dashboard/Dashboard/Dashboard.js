import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { admin } = useAuth();


    return (
        <section>
            <Row>
                <Col style={{ height: "100vh" }} xs={12} md={3} className="bg-dark  text-light py-5">
                    <div>
                        <ul className="list-unstyled">
                            {admin ? (
                                <>
                                    <li>
                                        <Link
                                            className="coustom-nav-link px-2 my-2"
                                            to={`/dashboard/makeAdmin`}
                                        >
                                            Make Admin
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="coustom-nav-link px-2 my-2"
                                            to={`/dashboard/addService`}
                                        >
                                            Add Service
                                        </Link>
                                    </li>

                                </>
                            ) : (
                                <>

                                    <li>
                                        <Link style={{ textDecoration: "none" }}
                                            className="coustom-nav-link px-2 my-2"
                                            to={`/dashboard/addReview`}
                                        >
                                            Add Review
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={9} className="py-5">
                    <Outlet />
                </Col>
            </Row>
        </section>
    );
};

export default Dashboard;