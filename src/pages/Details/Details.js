import React from 'react';
import { Container } from 'react-bootstrap';
import useInventories from '../../useInventories';
import Cards from '../Home/Inventory/Cards';

const Details = _id => {
      const [data] = useInventories();
      const selected = data.find(car => car._id === window.location.href.substring(22));

      return (
            <Container className='mt-5 pt-5'>
                  {
                        selected ? <Cards
                              key={selected._id}
                              name={selected.title}
                              image={selected.image}
                              description={selected.description}
                              price={selected.price}
                              quantity={selected.quantity}
                              supplierName={selected.supplierName}
                              btnLink="/"
                              size="col-12 col-md-6 col-lg-4 mx-auto"
                        ></Cards> : <div class="spinner-border text-center" role="status">
                              <span class="visually-hidden">Loading...</span>
                        </div>
                  }
            </Container>
      );
};

export default Details;