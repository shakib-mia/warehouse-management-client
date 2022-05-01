import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../../useInventories';
import Cards from './Cards';

const Inventory = () => {
      const [data] = useInventories();

      return (
            <Container className='my-5'>
                  <h1>Our Items</h1>

                  <div className="row my-5">
                        {
                              data.slice(0, 6).map(car => <Cards key={car._id}
                                    id={car._id}
                                    image={car.image}
                                    name={car.title}
                                    description={car.description}
                                    price={car.price}
                                    quantity={car.quantity}
                                    supplierName={car.supplierName}
                                    buttonName="Manage"
                                    btnColor="btn-primary"
                                    btnLink={`/${car._id}`}
                                    size='col-12 col-md-6 col-lg-4 my-2'
                              ></Cards>)
                        }
                  </div>

                  <Link to="/manage-inventories" className='btn btn-info'>Manage Inventory</Link>
            </Container>
      );
};

export default Inventory;