import React from 'react';
import TodoItems from './components/TodoItems';
import { Container, Row, Col } from  'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const todos = [
    {
      id: 1,
      title: 'Meeting with team at 12:30PM',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner with friend at 8:00PM',
      completed: false
    }
  ];
  return (

    <Container>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <TodoItems data={todos}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
