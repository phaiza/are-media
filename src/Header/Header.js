import React from "react";
import "./header.scss";
import { Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <div className="header">
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h1 className="header__title">Article Feed</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created by: <a href="#login">Faiza Ahmed</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
