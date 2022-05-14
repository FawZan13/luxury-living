import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <Navbar style={{ margin: "0px", background: 'white' }} className="" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    < Navbar.Brand href="#home"><img height="40px" src="https://i.ibb.co/GFjzpG7/image-2022-04-25-T17-11-37-395-Z.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <NavLink style={{ color: 'black', textDecoration: 'none' }} to="/home">Home</NavLink>
                        <Nav.Link as={HashLink} style={{ color: 'black' }} to="/home#about">About us</Nav.Link>
                        <Nav.Link as={HashLink} style={{ color: 'black' }} to="/home#projects">Projects</Nav.Link>
                        <Nav.Link as={HashLink} style={{ color: 'black' }} to="/home#contact" >Contact</Nav.Link>
                        <Nav.Link as={HashLink} style={{ color: 'black' }} to="/home#services">Service</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/home#update">Subscribe</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link> */}
                        {
                            user?.email ?
                                <div className=" d-flex">
                                    <Nav.Link as={Link} to="/dashboard"><Button className="px-4" style={{ background: '#30336b', marginLeft: '100px' }}>Dashboard</Button></Nav.Link>
                                    <Button className="px-4" style={{ background: '#30336b', marginLeft: '7px' }} onClick={logout}>Log Out</Button>
                                </div>
                                :

                                <Nav.Link as={Link} to="/login"><Button className="px-4" style={{ background: '#30336b', marginLeft: '100px' }}>Login</Button></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Navigation;