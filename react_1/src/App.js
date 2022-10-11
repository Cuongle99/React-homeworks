import React from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

import RandomNumber from './randomNumberProject/RandomNumber';
import TodoApp from './todoApp/components/TodoApp';


const App = () => {
  return (
      <div>
          <Container>
            {/* <RandomNumber/> */}
            <TodoApp/>
          </Container>
      </div>
  );
}

export default App
