import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Nav className="mr-auto" defaultActiveKey="/">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/list" className="nav-link">  List</NavLink>
            </Nav>
        </Navbar>
    )
}

export default Header
