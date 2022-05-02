import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>Home - Luxurious Car</title>
                  </Helmet>
                  <Banner></Banner>
                  <Inventory></Inventory>
            </div>
      );
};

export default Home;