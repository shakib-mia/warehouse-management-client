import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = ({ size, name, image, description, price, quantity, supplierName, buttonName, btnColor, btnLink }) => {
      return (
            <div className={size}>
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
                              <Link to={btnLink} className={`btn ${btnColor}`}>{buttonName}</Link >
                        </Card.Body>
                  </Card>
            </div>

      );
};

export default Cards;