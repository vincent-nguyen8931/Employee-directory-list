// defining a component
import React from "react";
import { Navbar } from 'react-bootstrap';

function Header() {
  return (

    // header component.
    // employee list component
    // employlee list will map through all employee
    <Navbar expand="lg" style={{ backgroundColor: "lightpink" }}>
      <Navbar.Brand href="#home" style={{ marginLeft: "50%", marginTop: "2rem", height: "5rem" }}><h2>Employee Directory</h2> <p>Sort employees by headers below.</p></Navbar.Brand>
    </Navbar>
  )
}

export default Header