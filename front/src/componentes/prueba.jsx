import React from 'react';
import { Card } from 'react-bootstrap';


function Login() {
  return (
    <div>
    <Card>
      <Card.Body>
        <Card.Title>Título de la tarjeta</Card.Title>
        <Card.Text>
          Contenido de la tarjeta.
        </Card.Text>
        <Card.Link href="home">Enlace</Card.Link>
      </Card.Body>
    </Card>
    <div>
    </div>
    </div>
  );
}

export default Login;
