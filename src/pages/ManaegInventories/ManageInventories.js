import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const ManageInventories = () => {
      const [data] = useInventories();
      console.log(data)
      return (
            <Container className='mt-5 py-5'>
                  <Helmet>
                        <title>Inventories - Luxurious Car</title>
                  </Helmet>
                  {data.length > 0 ? <div className='row'>
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
                                    btnLink={"/"}
                                    size='col-12 col-md-6 col-lg-4 my-2'
                              ></Cards>
                              )
                        }
                  </div> : <div className="text-center">
                        <div className="spinner-border align-items-center">
                              <span className="visually-hidden">Loading...</span>
                        </div>
                  </div>}
            </Container>
      );
};

export default ManageInventories;