import React from 'react';
import './App.css';
import Header from '../Header';
import Button from '../Button';

function TestComponent() {
  return <img width="16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK01qbQ5ju_5MxJ57JYaV3npMSsH_Wck7grctQ9Li17w&s" alt="search icon" />
}

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>

      <div className="Container">
        <Button 
          onClick={() => window.alert('Clicked')}
          appendIcon = {<TestComponent />}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
