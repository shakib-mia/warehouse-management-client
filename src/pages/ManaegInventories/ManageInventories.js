import React from 'react';
import { Container } from 'react-bootstrap';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const ManageInventories = () => {
      const [data] = useInventories()
      return (
            <Container className='py-5 my-5'>
                  this is manage inventories {data.length}
                  <div className="row">
                        {
                              data.map(car => <Cards key={car._id}
                                    id={car._id}
                                    image={car.image}
                                    name={car.title}
                                    description={car.description}
                                    price={car.price}
                                    quantity={car.quantity}
                                    supplierName={car.supplierName}
                                    buttonName="Delete"
                                    btnColor="btn-danger"
                              >
                              </Cards>)
                        }
                  </div>
            </Container>
      );
};

export default ManageInventories;