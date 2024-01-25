// ItemListContainer.js
import React from 'react';
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="item-list-container">
      <h2>{greeting}</h2>
      <p>Tenemos precios locales e importados.</p>
    </Container>
  );
}

export default ItemListContainer;