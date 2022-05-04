import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AddNewItem = () => {
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
            car.imgURL = imgURL.startsWith("https://") ? imgURL : imgURL + "https://";
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
            <div className='mt-5 pt-5'>
                  <Helmet>
                        <title>Add New Items - Luxurious Car</title>
                  </Helmet>
                  <h1>Add A New Item</h1>
                  <form onSubmit={submitItem} className="col-8 mx-auto p-4 shadow rounded-4">
                        <input type="text" placeholder='Enter Item Title' className='my-3 form-control' onBlur={e => setTitle(e.target.value)} />
                        <input type="text" placeholder='Enter Supplier Name' className='my-3 form-control' onBlur={e => setName(e.target.value)} />
                        <input type="text" placeholder='Enter Product Quantity' className='my-3 form-control' onBlur={e => setQuantity(e.target.value)} />
                        <input type="text" placeholder='Enter Price' className='my-3 form-control' onBlur={e => setPrice(e.target.value)} />
                        <input type="text" placeholder='Enter Image URL' className='my-3 form-control' onBlur={e => setImgURL(e.target.value)} />
                        <textarea placeholder='Description' rows="5" className='my-3 form-control' onBlur={e => setDescription(e.target.value)}></textarea>
                        <input type="submit" value="Add Item" className='btn btn-success' />
                  </form>
            </div>
      );
};

export default AddNewItem;