import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ products }) =>
  products.map((pr) => (
    <Card className="m-2" key={pr.id} style={{ width: '15rem' }}>
      <Link to={`/product/${pr.id}`}>
        <Card.Img style={{ height: '15rem' }} variant="top" src={pr.imageUrl} />
      </Link>
      <Card.Body>
        <Card.Title>{pr.title}</Card.Title>
        <Card.Text>
          {pr.price} {pr.size}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

export default Product;
