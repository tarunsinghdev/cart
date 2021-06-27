import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

import products from '../../../data/products.json';

const ProductListScreen = () => {
  return (
    <Container>
      <Row>
        <Product products={products} />
      </Row>
    </Container>
  );
};

export default ProductListScreen;
