import React from 'react';
import { useContext } from 'react';
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AppContext from '../../context/app-context';

const CartScreen = () => {
  const {
    cartItems,
    subtractFromCart,
    addToCartHandler,
    removeFromCartHandler,
    saveForLaterHandler,
    moveToCartHandler,
    saveProduct,
  } = useContext(AppContext);

  // console.log('cart items', cartItems);

  let val;
  const calculateTotalPrice = () => {
    val = cartItems.reduce((prev, curr) => prev + curr?.qty * curr.price, 0);
    return val;
  };

  return (
    <Container>
      <h1>Cart</h1>
      <Row className="my-5">
        <Col md={8}>
          {cartItems.length === 0 ? (
            <h3>Your cart is empty</h3>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  {/* {console.log(i)} */}
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.id}`}>{item.title}</Link>
                    </Col>
                    <Col md={2}>₹ {item.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => subtractFromCart(item.id)}
                        size="sm"
                        disabled={item.qty ? item.qty === 1 : false}
                      >
                        -
                      </Button>{' '}
                      {item.qty ? item.qty : 1}{' '}
                      <Button
                        onClick={() => addToCartHandler(item.id)}
                        size="sm"
                      >
                        +
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                    <Row>
                      <Col style={{ textAlign: 'right' }}>
                        <Button
                          onClick={() => saveForLaterHandler(item)}
                          size="sm"
                        >
                          Save for later
                        </Button>
                      </Col>
                    </Row>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal {cartItems.reduce((prev, curr) => prev + curr?.qty, 0)}
              </h2>
              Total Price: <Col>₹ {calculateTotalPrice()}</Col>
            </ListGroup.Item>
            <ListGroup.Item>
              Discount : <Col>15%</Col>
            </ListGroup.Item>
            <ListGroup.Item>
              Final Price : <Col>₹ {val - val * 0.15}</Col>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        {saveProduct.length === 0 ? (
          <h3>No Saved Products found</h3>
        ) : (
          <Col md={8}>
            <h3>Saved Products</h3>
            {saveProduct.map((item) => (
              <ListGroup key={item.id}>
                <ListGroup.Item>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item?.imageUrl}
                        alt={item?.title}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.id}`}>{item.title}</Link>
                    </Col>
                    <Col md={2}>₹ {item.price}</Col>
                    <Col md={3}>
                      <Button onClick={() => moveToCartHandler(item)} size="sm">
                        Move to cart
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CartScreen;
