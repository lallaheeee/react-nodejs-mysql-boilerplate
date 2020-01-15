import React from 'react';
import * as Styled from './style';
import logo from './logo.svg';

const Header = () => (
  <Styled.Header>
    <Styled.Logo src={logo} alt={logo} />
    <nav>
      <ul>
        <Styled.Li>
          <Styled.A>Home</Styled.A>
        </Styled.Li>
        <Styled.Li>
          <Styled.A>Service</Styled.A>
        </Styled.Li>
        <Styled.Li>
          <Styled.A>About</Styled.A>
        </Styled.Li>
      </ul>
    </nav>
  </Styled.Header>
);

export default Header;
