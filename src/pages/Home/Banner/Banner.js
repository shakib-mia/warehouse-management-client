import React, { useEffect, useState } from 'react';
import "./Banner.css";

const Banner = () => {
      const [images, setImage] = useState([]);

      useEffect(() => {
            fetch('https://still-depths-00724.herokuapp.com/cars')
                  .then(res => res.json())
                  .then(data => {
                        setImage(data)
                  })
      }, [])
      return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                        <div className="carousel-item active">
                              <div className='text-white d-flex align-items-center justify-content-center h-100 h1'>Welcome to Luxurious Car</div>
                        </div>
                        {
                              images.map(image => <div className="carousel-item" key={image._id}>
                                    <img src={image.image} className="d-block w-100" alt={image.title} />
                              </div>
                              )
                        }
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                  </button>
            </div>
      );
};

export default Banner;