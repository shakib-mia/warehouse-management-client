import React, { useEffect, useState } from 'react';
import "./Banner.css";

const Banner = () => {
      const [images, setImage] = useState([]);

      useEffect(() => {
            fetch('https://still-depths-00724.herokuapp.com/allCars')
                  .then(res => res.json())
                  .then(data => setImage(data))
      }, []);


      return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                        <div className="carousel-item carousel-banner active">
                              <div className='intro'>
                                    <h1 className='display-2'>Welcome to Luxurious Car</h1>
                              </div>
                        </div>
                        {
                              images.slice(1, images.length - 1).map(image =>
                                    <div className="carousel-item carousel-banner" key={image._id}>
                                          <img src={image.image} alt="third slide" />
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