import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const Details = _id => {
      const [data] = useInventories();
      const selected = data.find(car => car._id === window.location.href.substring(26));

      const updateCount = () => {
            alert("Hi")
      }

      return (
            <Container className='mt-5 pt-5 row mx-auto'>
                  <div className='col-10 col-lg-6 mx-auto'>
                        {
                              selected ? <Cards
                                    key={selected._id}
                                    name={selected.title}
                                    image={selected.image}
                                    description={selected.description}
                                    price={selected.price}
                                    quantity={selected.quantity}
                                    supplierName={selected.supplierName}
                                    buttonName="Delivered"
                                    savePath={updateCount}
                                    btnColor="btn-success"
                                    size="col-10 mx-auto"
                              ></Cards> : <div className="spinner-border text-center text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                              </div>
                        }
                  </div>

                  <div className="col-10 col-lg-6 mx-auto my-auto">
                        <h2 className='text-center'>Restock</h2>
                        <div className="input-group mb-3">
                              <input type="number" className="form-control" placeholder="Input Quantity" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                              <input type="button" value="Restock" className="btn btn-success" id="basic-addon2" />
                        </div>
                  </div>

                  <div className="col-12 my-5">
                        <Link to="/manage-inventories" className='btn btn-info'>Manage Inventory</Link>
                  </div>
            </Container>

      );
};

export default Details;