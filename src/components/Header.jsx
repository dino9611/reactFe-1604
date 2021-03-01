import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, NavLink as LinkRouter } from "react-router-dom";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand className="mr-auto text-white">
          <Link to="/" className="text-muted">
           TUGAS-CARD
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <LinkRouter to="/Card" className="text-muted">Card</LinkRouter>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Abdralghi" className="text-muted">My GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;