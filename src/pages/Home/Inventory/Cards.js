import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = ({ name, image, description, price, quantity, supplierName }) => {
      return (
            <div className='col-12 col-md-6 col-lg-4 my-2'>
                  <Card className='h-100 shadow'>
                        <Card.Img variant="top" src={image} height="300px" />
                        <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                    <p>{description}</p>
                                    <p><b>Price: </b>${price}</p>
                                    <p><b>Quantity: </b>{quantity}</p>
                                    <p><b>Supplier:</b>{supplierName}</p>
                              </Card.Text>
                              <Link to="/" className='btn btn-primary'>Manage</Link>
                        </Card.Body>
                  </Card>
            </div>

      );
};

export default Cards;