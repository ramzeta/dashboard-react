import React from "react";
import { Navbar } from "react-bootstrap";
import "./HeaderBar.css";
import image from '../../assets/images/byron-sonrriendo.png';
import Image from "react-bootstrap";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="topnav"
        >
          <Navbar.Brand href="">Ramzeta <img  src={image} alt="Byron" height={20}></img ></Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;