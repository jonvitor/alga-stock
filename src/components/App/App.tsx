import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container';

function TestComponent() {
  return <img width="16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK01qbQ5ju_5MxJ57JYaV3npMSsH_Wck7grctQ9Li17w&s" alt="search icon" />
}

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>

      <Container>
        <Button 
          onClick={() => window.alert('Clicked')}
          appendIcon = {<TestComponent />}
        >
          Button
        </Button>
      </Container>
    </div>
  );
}

export default App;
