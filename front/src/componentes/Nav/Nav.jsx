import React from "react";
import { useDispatch } from "react-redux";
import { getSearchId, getSearchName, getGender } from "../../Redux/axions/axions";
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
const handleChange = (value) => {
  console.log(value);
  dispatch(getGender(value))
}

    return(
        <Navbar bg="dark" variant="dark" expand="lg" className={styles.nav}>
          <Navbar.Brand style={{ fontFamily: 'Caveat', fontSize: '35px', color: 'rgb(139, 248, 15)' }} >Rick y Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" style={{background: 'black'}} />
          <Navbar.Collapse id="navbar-nav" >
            <Nav>

              <NavDropdown title="Gender" id="basic-nav-dropdown" className={styles.custom} >
                <NavDropdown.Item
                 onClick={() => handleChange('Male')}
                 >
                  Male
                  </NavDropdown.Item>
                <NavDropdown.Item
                 onClick={() => handleChange('Female')}
                 >
                  Famale
                  </NavDropdown.Item>
                <NavDropdown.Item
                 onClick={() => handleChange('unknown')}
                  >Unknown</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                 onClick={() => handleChange('todos')}
                  >Todos</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

            </Nav>
            <Form>
              <FormControl style={{ width: '200px', position: 'absolute', left: '76.3%', top: '25%'}} type="buton" placeholder="Search" onChange={busqueda} />
              <Button variant="outline-light" style={{ position: 'absolute', left: '92%', top: '25%' }} >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      );
}
export default Navar;