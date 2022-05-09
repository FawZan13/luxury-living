import React, { useState } from 'react';
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
    }
    return (
        <div id="contact">
            <h1 className="text-center mt-5" style={{ color: "blue" }}>Register</h1>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <img className="w-100" src="https://i.ibb.co/zXLQ5nZ/Get-in-touch-amico.png" alt="" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Container className="text-white mt-5 text-center">
                            <form onSubmit={handleLoginSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Your Name" className="form-label">Your Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" onBlur={handleOnBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" onBlur={handleOnBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" id="exampleFormControlInput1" placeholder="Your Password" onBlur={handleOnBlur} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ReType Password" className="form-label">ReType Password</label>
                                    <input type="password" className="form-control" name="password2" id="exampleFormControlInput1" placeholder="ReType Password" onBlur={handleOnBlur} />
                                </div>

                                <Button className="text-center" variant="outline-primary" type="Submit">Submit</Button>
                            </form>
                            <NavLink className="text-center " style={{ textDecoration: 'none' }} to="/login">Already have an account?Please Login</NavLink>
                            {isLoading && <Spinner animation="border" variant="primary" />}
                            {user?.email && <Alert variant="danger">User Created: {user.email}</Alert>}
                            {authError && <Alert variant="danger">{authError}</Alert>}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;