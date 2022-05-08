import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const MyItems = () => {
      const [data, setData] = useInventories();
      const userItems = data.slice(10, data.length)

      const deleteBtn = (id) => {
            const result = window.confirm("Are You Sure You want to delete this item?");

            if (result) {
                  fetch(`https://still-depths-00724.herokuapp.com/allCars/${id}`, {
                        method: 'DELETE'
                  })
                        .then(res => res.json())
                        .then(data => {
                              const remaining = userItems.filter(item => item._id !== id);
                              setData(remaining);
                              document.getElementById('card').style.display = "none"
                        })
            }

      }

      return (
            <Container className='my-5 py-5'>
                  <Helmet>
                        <title>My Items - Luxurious Cars</title>
                  </Helmet>
                  <div className="row">
                        {
                              userItems.length > 0 ? userItems.map(car =>
                                    <Cards key={car._id}
                                          id={car._id}
                                          uId="card"
                                          image={car.image}
                                          name={car.title}
                                          description={car.description}
                                          price={car.price}
                                          quantity={car.quantity}
                                          supplierName={car.supplierName}
                                          buttonName="Delete"
                                          btnColor="btn-primary"
                                          savePath={() => deleteBtn(car._id)}
                                          size='col-12 col-md-6 col-lg-4 my-2'
                                    ></Cards>
                              ) : <div className="text-center">
                                    <div className="spinner-border align-items-center">
                                          <span className="visually-hidden">Loading...</span>
                                    </div>
                              </div>
                        }
                  </div>
            </Container>
      );
};

export default MyItems;