import React from 'react';
import styled from 'styled-components';

const HeaderBarContainer = styled.div`
  height: 60px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  padding: 10px;
  background-color: white;
  position: relative;
  z-index: 10;
`
const Logo = styled.img`
  max-width: 40px;
  max-height: 40px;
`

const HeaderBar = () => (
  <HeaderBarContainer>
    <Logo src="https://www.fsansalvadore.com/images/ico.ico/apple-icon-144x144.png" alt="logo"/>
  </HeaderBarContainer>
)

export default HeaderBar;