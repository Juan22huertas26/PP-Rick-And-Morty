import React from "react";
import { useDispatch } from "react-redux";
import { getSearchId, getSearchName } from "../../Redux/axions/axions";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import styles from './Nav.module.css'

const Navar = () => {
const dispatch = useDispatch();

const busqueda = (e) => {
    const { value } = e.target
    if(!isNaN(parseFloat(value))){
      dispatch(getSearchId(value))
    }else{
      dispatch(getSearchName(value))
    }
    
}

    return(
        <Navbar bg="dark" variant="dark" expand="lg" className={styles.nav}>
          <Navbar.Brand style={{ fontFamily: 'Caveat', fontSize: '35px', color: 'rgb(139, 248, 15)' }} >Rick y Morty</Navbar.Brand>
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
            <Form>
              <FormControl style={{ width: '200px', position: 'absolute', left: '68%', top: '25%'}} type="buton" placeholder="Search" onChange={busqueda} />
              <Button variant="outline-light" style={{ position: 'absolute', left: '81.5%', top: '25%' }} onClick={() => busqueda()} >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      );
}
export default Navar;