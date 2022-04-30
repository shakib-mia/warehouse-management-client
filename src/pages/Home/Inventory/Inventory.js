import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Cards from './Cards';

const Inventory = () => {
      const [data, setData] = useState([]);
      const data2 = data.slice(0, 6);
      useEffect(() => {
            fetch("https://still-depths-00724.herokuapp.com/cars")
                  .then(res => res.json())
                  .then(data => setData(data))
      }, [])
      return (
            <Container className='my-5'>
                  <h1>Our Items</h1>

                  <div className="row">
                        {data2.map(car => <Cards key={car._id} image={car.image} name={car.title} description={car.description} price={car.price} quantity={car.quantity} supplierName={car.supplierName}></Cards>)}
                  </div>
            </Container>
      );
};

export default Inventory;