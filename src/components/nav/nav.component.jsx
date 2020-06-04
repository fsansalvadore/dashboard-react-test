import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './nav.styles.scss';

const NavContainer = styled.nav`
  height: 100%;
  width: 250px;
  border-right: 1px solid #eee;
  background-color: #f9f9f8;
  padding: 20px;
`

const Nav = () => (
  <NavContainer>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
    </ul>
  </NavContainer>
)

export default Nav;