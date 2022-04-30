import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../../useInventories';
import Cards from './Cards';

const Inventory = () => {
      const [data] = useInventories();
      const data2 = data.slice(0, 6);

      return (
            <Container className='my-5'>
                  <h1>Our Items</h1>

                  <div className="row my-5">
                        {data2?.map(car => <Cards key={car._id} image={car.image} name={car.title} description={car.description} price={car.price} quantity={car.quantity} supplierName={car.supplierName}></Cards>)}
                  </div>

                  <Link to="/manage-inventories" className='btn btn-info'>Manage Inventory</Link>
            </Container>
      );
};

export default Inventory;