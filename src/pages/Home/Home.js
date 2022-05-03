import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Feedback from './Feedbak/Feedback';
import Inventory from './Inventory/Inventory';
import Review from './Review/Review';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>Home - Luxurious Car</title>
                  </Helmet>
                  <Banner></Banner>
                  <Inventory></Inventory>
                  <Review></Review>
                  <Feedback></Feedback>
            </div>
      );
};

export default Home;