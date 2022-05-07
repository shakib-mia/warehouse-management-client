import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Cards from '../Home/Inventory/Cards';

const MyItems = () => {
      const [items, setItem] = useState([]);
      useEffect(() => {
            fetch('https://still-depths-00724.herokuapp.com/userItems')
                  .then(res => res.json())
                  .then(data => setItem(data))
      }, [])


      const deleteFromSingle = id => {
            console.log(id)
            fetch(`https://still-depths-00724.herokuapp.com/userItems/${id}`, {
                  method: "DELETE",
            })
                  .then(res => res.json())
                  .then(result => {
                        console.log(result);
                  })
      }

      const deleteFromAll = id => {
            fetch(`https://still-depths-00724.herokuapp.com/allCars/${id}`, {
                  method: "DELETE",
            })
                  .then(res => res.json())
                  .then(result => {
                        console.log(result);
                  })
      }

      const deleteBtn = (id) => {
            const result = window.confirm("Are You Sure You want to delete this item?");
            console.log(id)
            if (result) {
                  document.getElementById(id).style.display = "none";
                  if (items.filter(element => console.log(element._id === id))) {
                        deleteFromSingle(id);
                        deleteFromAll(id)
                  }
            }
      }

      return (
            <Container className='my-5 py-5'>
                  <Helmet>
                        <title>My Items - Luxurious Cars</title>
                  </Helmet>
                  <div className="row">
                        {
                              items.length > 0 ? items.map(car =>
                                    <Cards key={car._id}
                                          id={car._id}
                                          uId={car._id}
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