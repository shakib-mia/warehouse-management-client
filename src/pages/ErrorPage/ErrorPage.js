import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
      return (
            <div>
                  <Helmet>
                        <title>Page Not Found - Luxurious Car</title>
                  </Helmet>
                  <img src="error.png" width={"100%"} height="auto" alt="" />
            </div>
      );
};

export default ErrorPage;