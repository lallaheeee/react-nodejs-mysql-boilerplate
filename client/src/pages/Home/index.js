import React from 'react';
import * as Styled from './style';
import Header from '../../containers/Header';

const Home = () => (
  <>
    <Header />
    <main>
      <Styled.Title>Home</Styled.Title>
      <Styled.Paragraph>This is Home </Styled.Paragraph>
    </main>
  </>
);

export default Home;
