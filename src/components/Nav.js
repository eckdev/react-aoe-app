import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Nav className="mr-auto" defaultActiveKey="/">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/list">  List</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header
