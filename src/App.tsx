import React from 'react';
import {Container} from './resources/Container'
import Header from './views/Header';
import Info from './views/Info';
import Footer from './views/Footer';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;

`

function App() {
  return (
    <AppContainer>
    <Header/>

      <Container>
        <Info/>
      </Container>
      <Footer/>
    </AppContainer>
  );
}

export default App;
