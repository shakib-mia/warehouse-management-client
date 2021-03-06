import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const ManageInventories = () => {
      const [data, setData] = useInventories();

      const deleteBtn = (id) => {
            const result = window.confirm("Are You Sure You want to delete this item?");
            if (result) {
                  // document.getElementById(id).style.display = "none";
                  fetch(`https://still-depths-00724.herokuapp.com/allCars/${id}`, {
                        method: "DELETE"
                  })
                        .then(res => res.json())
                        .then(Data => {
                              document.getElementsByClassName('row').style.display = "none"
                              const remaining = data.filter(item => item._id !== id);
                              setData(remaining)
                        })

            }
      }

      return (
            <Container className='py-5'>
                  <Helmet>
                        <title>Inventories - Luxurious Car</title>
                  </Helmet>

                  <Link to="/add-new-item" className='btn btn-success my-5'>Add New Item</Link>

                  <div className="row">
                        {data.length > 0 ?

                              data.map(car => <Cards key={car._id}
                                    id={car._id}
                                    uId={car._id}
                                    image={car.image}
                                    name={car.title}
                                    description={car.description}
                                    price={car.price}
                                    quantity={car.quantity}
                                    supplierName={car.supplierName}
                                    buttonName="Delete"
                                    btnColor="btn-danger"
                                    savePath={() => deleteBtn(car._id)}
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