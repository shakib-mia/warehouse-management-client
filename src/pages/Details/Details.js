import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const Details = () => {
      const [data] = useInventories();
      const selected = data.find(car => car._id === localStorage.getItem('id'));
      const [quantity, setNewCount] = useState(0);
      console.log(selected)

      const _id = selected?._id;
      const title = selected?.title;
      const description = selected?.description;
      const image = selected?.image;
      const price = selected?.price;
      const supplierName = selected?.supplierName


      const car = { _id, quantity, title, description, image, price, supplierName };

      const updateCount = () => {
            const updatedCount = selected.quantity + parseInt(quantity);
            document.getElementById('quantity').innerText = updatedCount;
            car._id = _id
            car.quantity = updatedCount;
            car.title = title;
            car.description = description;
            car.image = image;
            car.price = price;
            car.supplierName = supplierName;
            document.getElementById('count').value = ""

            fetch(`https://still-depths-00724.herokuapp.com/allCars/${selected._id}`, {
                  method: "PUT",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(car)
            })
                  .then(res => res.json())
                  .then(result => console.log(result))
      }

      const delivered = () => {
            const quantity = parseFloat(document.getElementById('quantity').innerText)
            if (quantity > 0) {
                  document.getElementById('quantity').innerText = quantity - 1;
                  const updatedCount = quantity - 1;
                  car._id = _id
                  car.quantity = updatedCount;
                  car.title = title;
                  car.description = description;
                  car.image = image;
                  car.price = price;
                  car.supplierName = supplierName;
            }

            else {
                  alert(title + " is out of stock")
            }

            fetch(`https://still-depths-00724.herokuapp.com/allCars/${selected._id}`, {
                  method: "PUT",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(car)
            })
                  .then(res => res.json())
                  .then(result => console.log(result))
      }

      return (
            <Container className='mt-5 pt-5 row mx-auto'>
                  <Helmet>
                        <title>{selected ? selected.title : "Loading..."} - Luxurious Car</title>
                  </Helmet>
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
                        <form className="mb-3">
                              <input type="text" placeholder='Enter Item Title' className='my-3 form-control' disabled value={selected?.title} />
                              <input type="text" placeholder='Enter Supplier Name' className='my-3 form-control' disabled value={selected?.supplierName} />
                              <input type="text" placeholder='Enter Product Quantity' className='my-3 form-control' id='count' onBlur={e => setNewCount(e.target.value)} />
                              <input type="text" placeholder='Enter Price' className='my-3 form-control' disabled value={selected?.price} />
                              <input type="text" placeholder='Enter Image URL' className='my-3 form-control' disabled value={selected?.image} />
                              <textarea placeholder='Description' rows="5" className='my-3 form-control' disabled value={selected?.description}></textarea>
                              <input type="button" value="Restock" className="btn btn-success" id="basic-addon2" onClick={updateCount} />
                        </form>
                  </div>

                  <div className="col-12 my-5">
                        <Link to="/manage-inventories" className='btn btn-info'>Manage Inventory</Link>
                  </div>
            </Container>

      );
};

export default Details;