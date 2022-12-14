import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {NavLink} from 'react-router-dom';

import Menu from './data/Menu';
import './styles/navbar.css';

const Navigation = () => {
    // const [active, setActive] = useState(false);
return (
<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container fluid>
    <Navbar.Brand href="#">Hello Asso</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '200px' }}
        navbarScroll
        >
        {/* <Nav className={active ? "nav-menu active" : "nav-menu"}>  */}
            {Menu.map((item, index) => {
                    return (
                    <Nav.Link as={NavLink} className={item.cName} key={index} to={item.url}>{item.title}</Nav.Link> //trouver la condition pour mettre la class active
                    // <Nav.Link  key={index}>
                    //     <Link to={item.url} className={item.cName}>
                    //     {item.title}
                    //     </Link>
                    // </Nav.Link>
                    );
                })}
        </Nav>
        {/* </Nav> */}
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Container>
</Navbar>
);
}

export default Navigation;