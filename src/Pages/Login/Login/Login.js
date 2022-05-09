import React, { useState } from 'react';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <div>
            <Navigation />
            <div className="text-center my-5">
                <img height="100px" src="https://i.ibb.co/GFjzpG7/image-2022-04-25-T17-11-37-395-Z.png" alt="" />
            </div>
            <div className="text-center">
                <h4 className="text-center">Login With</h4>
                <form onSubmit={handleLoginSubmit}>
                    <Container className="mx-5 px-5">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleOnChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="exampleFormControlInput1" placeholder="Your Password" onChange={handleOnChange} />
                        </div>
                        <Button className="text-center" variant="outline-primary" type="Submit">Login</Button>
                    </Container>
                </form>
                <h2 className="mt-5">Login with Google</h2>
                <Button className="text-center my-4" onClick={handleGoogleSignIn} variant="outline-danger">Login</Button><br />
                <NavLink className="text-center " style={{ textDecoration: 'none' }} to="/register">Dont't have an account?Please Register</NavLink>
                {isLoading && <Spinner animation="border" variant="primary" />}
                {user?.email && <Alert variant="danger">User Created: {user.email}</Alert>}
                {authError && <Alert variant="danger">{authError}</Alert>}
            </div>
        </div>
    );
};

export default Login;