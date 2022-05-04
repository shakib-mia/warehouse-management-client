import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const ManageInventories = () => {
      const [data] = useInventories();

      return (
            <Container className='mt-5 py-5'>
                  <Helmet>
                        <title>Inventories - Luxurious Car</title>
                  </Helmet>

                  <Link to="/add-new-item" className='btn btn-success'>Add New Item</Link>

                  <div className="row">
                        {data.length > 0 ?

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

                              : <div className="text-center">
                                    <div className="spinner-border align-items-center">
                                          <span className="visually-hidden">Loading...</span>
                                    </div>
                              </div>}
                  </div>
            </Container>
      );
};

export default ManageInventories;