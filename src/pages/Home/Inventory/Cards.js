import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = ({ uId, size, name, image, description, price, quantity, supplierName, buttonName, btnColor, btnLink, savePath }) => {
      return (
            <div className={size} id={uId}>
                  <Card className='h-100 shadow'>
                        <Card.Img variant="top" src={image} height="300px" />
                        <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <div className='card-text'>
                                    <p>{description}</p>
                                    <p><b>Price: </b>${price}</p>
                                    <p><b>Quantity: </b><span id='quantity'>{quantity}</span></p>
                                    <p><b>Supplier:</b>{supplierName}</p>
                              </div>
                        </Card.Body>
                        <Card.Footer className="bg-transparent border-0">
                              <Link to={btnLink ? `/car/${btnLink}` : ""} onClick={savePath} className={`btn ${btnColor}`}>{buttonName}</Link>
                        </Card.Footer>
                  </Card>
            </div>

      );
};

export default Cards;