import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

const headers: TableHeader[] = [
  { key: 'id', value: '#'},
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price' },
  { key: 'stock', value: 'Available Stock', right: true} 
]

function App() {
  return (
    <div className="App">
      <Header title='AlgaStock'/>
      <Container>
        <Table 
          data={ Products }
          headers={ headers }
        />

        <Form onSubmit={console.log}>
          <Input 
            label="Name"
            placeholder="E.g: Cookie"
          />
          <Input 
            label="Price"
            type="Number"
            step="0.01"
            placeholder="E.g: 1.25"
          />
          <Input 
            label="Stock"
            type="Number"
            placeholder="E.g: 20"
          />
          <Button>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
