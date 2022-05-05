import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const Details = _id => {
      const [data] = useInventories();
      const selected = data.find(car => car._id === window.location.href.substring(26));

      const [quantity, setNewCount] = useState(0);
      const car = { quantity };

      const updateCount = () => {
            const updatedCount = selected.quantity + parseInt(quantity);
            // selected.quantity = updatedCount;
            car.quantity = updatedCount;

            fetch('http://localhost:7000/allCars', {
                  method: "PUT",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(selected)
            })
                  .then(res => res.json())
                  .then(result => console.log(result))
      }

      const delivered = () => {
            const updatedCount = selected.quantity - 1;

            selected.quantity = updatedCount;
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
                                    btnLink={`${selected?._id}`}
                                    savePath={() => delivered(selected._id)}
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
                              <input type="number" className="form-control" placeholder="Input Quantity" aria-label="Recipient's username" aria-describedby="basic-addon2" onBlur={e => setNewCount(e.target.value)} />
                              <input type="button" value="Restock" className="btn btn-success" id="basic-addon2" onClick={updateCount} />
                        </div>
                  </div>

                  <div className="col-12 my-5">
                        <Link to="/manage-inventories" className='btn btn-info'>Manage Inventory</Link>
                  </div>
            </Container>

      );
};

export default Details;