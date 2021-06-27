import React from 'react';
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from 'react-bootstrap';

import products from '../../../data/products.json';

const ProductDetailScreen = ({ match, addToCart, history }) => {
  const id = match.params.id;
  const product = products[id];

  const addToCartHandler = () => {
    addToCart({ ...product, qty: 1 });
    history.push('/cart');
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Image
            style={{ height: '20rem' }}
            src={product?.imageUrl}
            alt={product?.name}
            fluid
          />
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>Price : ₹{product?.price}</ListGroup.Item>
            <ListGroup.Item>
              Description : {product?.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹ {product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailScreen;
