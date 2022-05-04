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
                  <div className="row">
                        <div className="col-12 col-lg-6">
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
                                                size='col-12 col-md-10 my-2 mx-auto'
                                          ></Cards>
                                          )
                                    }
                              </div> : <div className="text-center">
                                    <div className="spinner-border align-items-center">
                                          <span className="visually-hidden">Loading...</span>
                                    </div>
                              </div>}
                        </div>
                        <div className="col-12 col-lg-6 my-4">
                              <Link to="/add-new-item" className='btn btn-success'>Add New Item</Link>
                        </div>
                  </div>
            </Container>
      );
};

export default ManageInventories;