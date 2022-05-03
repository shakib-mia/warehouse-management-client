import React, { useEffect, useState } from 'react';

const Review = () => {
      const [comments, setComments] = useState([]);

      const nextComments = comments.slice(1, comments.length)

      useEffect(() => {
            fetch('https://still-depths-00724.herokuapp.com/comments')
                  .then(res => res.json())
                  .then(data => setComments(data))
      }, [])

      return (
            <div className='py-4 my-5'>
                  <h1>What Our Clients Says</h1>
                  <div id="carouselExampleControl" className="carousel col-6 mx-auto slide" data-bs-ride="carousel">

                        <div className="carousel-inner py-5">
                              <div className="carousel-item active">
                                    {comments ?
                                          <div>
                                                <h1>{comments[0]?.name}</h1>
                                                <p>{comments[0]?.comment}</p>
                                          </div>
                                          : "Loading"}
                              </div>
                              {
                                    nextComments?.map(comment => <div className="carousel-item" key={comment._id}>
                                          <h1>{comment.name}</h1>
                                          {comment.comment}
                                    </div>
                                    )
                              }
                        </div>

                        <button className="carousel-control-prev pe-5" type="button" data-bs-target="#carouselExampleControl" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon bg-primary rounded-circle h6 px-4 py-4" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next ps-5" type="button" data-bs-target="#carouselExampleControl" data-bs-slide="next">
                              <span className="carousel-control-next-icon bg-primary rounded-circle h6 px-4 py-4" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                        </button>
                  </div>
            </div>
      );
};

export default Review;