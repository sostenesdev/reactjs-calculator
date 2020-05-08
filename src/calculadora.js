import React from 'react';
import './calculadora.css';
import {Jumbotron, Container, Row} from 'react-bootstrap';

function Calculadora() {
  return (
    <Container>
       <Row className="justify-content-md-center">
       <Jumbotron
            style={{
              background: 'transparent !important',
              backgroundColor:'#00b8e6',
              padding:'5px',
              margin:'35px',
              width:'400px'
            }} >
    </Jumbotron>
       </Row>
  
    </Container>
  );
}

export default Calculadora;
