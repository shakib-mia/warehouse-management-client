import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const ManageInventories = () => {
      const [data] = useInventories();

      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [imgURL, setImgURL] = useState('');
      const [price, setPrice] = useState('');
      const [supplierName, setName] = useState('');
      const [quantity, setQuantity] = useState('');

      const car = { title, imgURL, price, quantity, supplierName, description }

      const submitItem = event => {
            event.preventDefault();

            car.title = title;
            car.imgURL = imgURL;
            car.price = price;
            car.quantity = quantity;
            car.supplierName = supplierName;
            car.description = description

            fetch('https://still-depths-00724.herokuapp.com/allCars', {
                  method: "POST",
                  headers: {
                        'content-type': "application/json"
                  },
                  body: JSON.stringify(car)
            })
                  .then(res => res.json())
                  .then(result => {
                        console.log(result);
                  })

            alert("New Item added")
      }

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
                              <h1>Add A New Item</h1>
                              <form onSubmit={submitItem}>
                                    <input type="text" placeholder='Enter Item Title' className='my-3 form-control' onBlur={e => setTitle(e.target.value)} />
                                    <input type="text" placeholder='Enter Supplier Name' className='my-3 form-control' onBlur={e => setName(e.target.value)} />
                                    <input type="text" placeholder='Enter Product Quantity' className='my-3 form-control' onBlur={e => setQuantity(e.target.value)} />
                                    <input type="text" placeholder='Enter Price' className='my-3 form-control' onBlur={e => setPrice(e.target.value)} />
                                    <input type="text" placeholder='Enter Image URL' className='my-3 form-control' onBlur={e => setImgURL(e.target.value)} />
                                    <textarea placeholder='Description' rows="5" className='my-3 form-control' onBlur={e => setDescription(e.target.value)}></textarea>
                                    <input type="submit" value="Add Item" className='btn btn-success' />
                              </form>
                        </div>
                  </div>
            </Container>
      );
};

export default ManageInventories;