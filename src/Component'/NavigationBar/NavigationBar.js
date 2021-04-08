import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Link className="go-mobile" to='/home'><h1 className=''>Booking-Info</h1></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Link className='p-2 navi mr-5 mb-3' to='/home'>Home</Link>
                    <Link className='p-2 navi mr-5 mb-3' to='/addInfo'>Add-Info</Link>
                    <Link className='p-2 navi mr-5 mb-3' to='/allInfo'>Show-all-info</Link>
                    <Link className='p-2 navi mr-5 mb-3' to='/search'>Search</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;