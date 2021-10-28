import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Food from "../../assets/home.jpg";

const Header = () => {
  return (
    <div>
      <Navbar
        className="header"
        collapseOnSelect
        expand="sm"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand>
          <h1>
            <Link to="/">
              <img src={Food} alt="about" />
            </Link>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Link className="nav-link" to="/">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link className="nav-link" to="/about">
              <i className="fas fa-address-book"></i> About
            </Link>
            <Link className="nav-link" to="/recipes">
              <i className="fas fa-utensils"></i> Recipes
            </Link>
            <Link className="nav-link" to="/create">
              <i className="fab fa-wpforms"></i> Create
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
