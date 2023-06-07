import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import styles from './Nav.module.css'

const Navar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className={styles.nav}>
          <Navbar.Brand href="#">Rick y Morty</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbar-nav" /> */}
          <Navbar.Collapse id="navbar-nav" >
            <Nav>
              <NavDropdown title="Opciones" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#opcion1"style={{ backgroundColor: 'black', color: 'white' }} >Opción 1</NavDropdown.Item>
                <NavDropdown.Item href="#opcion2" style={{ backgroundColor: 'black', color: 'white' }} >Opción 2</NavDropdown.Item>
                <NavDropdown.Item href="#opcion3" style={{ backgroundColor: 'black', color: 'white' }} >Opción 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" style={{ backgroundColor: 'red', color: 'white' }}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Buscar" className={styles.search} />
              <Button variant="outline-light" className={styles.botom} >Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      );
}
export default Navar;