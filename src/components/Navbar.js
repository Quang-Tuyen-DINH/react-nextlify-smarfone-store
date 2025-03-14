import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {CartButton} from'./Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <CartButton>
            <span className="mr-2">
              <i className="fas fa-shopping-cart"/>
            </span>
            My Cart
          </CartButton>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--lightBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    transition: all 0.3s ease-in-out;
    font-size: 1.2rem;
    text-transform: capitalize !important;
    &:hover{
      color: var(--mainBlue) !important;
      transition: all 0.3s ease-in-out;
    }
  }
`