import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

export const HeaderNav = () => {
    return (
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
          <Container>
            <NavbarBrand to="/">AspNetCoreReactRedux</NavbarBrand>
            <NavbarToggler  className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                   <NavLink className="text-dark" to="/contacts">Contact</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>

        </Navbar>
    );
};
