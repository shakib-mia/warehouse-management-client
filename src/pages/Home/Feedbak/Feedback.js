import { React, useState } from 'react';
import { Container } from 'react-bootstrap';

const Feedback = () => {
      const [name, setName] = useState('');
      const [comment, setComment] = useState('');
      const [image, setImage] = useState('');
      const [review, setReview] = useState('');

      const comments = { name, comment, image, review };

      const formSubmit = event => {
            event.preventDefault();
            comments.name = name;
            comments.comments = comment;
            comments.image = image;
            comments.review = review;

            fetch(`https://still-depths-00724.herokuapp.com/comments`, {
                  method: "POST",
                  headers: {
                        'content-type': "application/json"
                  },
                  body: JSON.stringify(comments)
            })
                  .then(res => res.json())
                  .then(result => console.log(result))
            window.location.reload();
            alert("Thanks For Your Feedback")
      }

      return (
            <Container className='my-4'>
                  <h1>Give a FeedBack</h1>

                  <div className="row">
                        <form className="col-10 mx-auto" onSubmit={formSubmit}>
                              <input required type="text" placeholder='Enter Your Name' className='form-control my-2' onBlur={e => setName(e.target.value)} />
                              <input required type="text" placeholder='Enter Your Image URL' className="form-control my-2" onBlur={e => setImage(e.target.value)} />
                              <textarea required id="" cols="30" rows="5" className='form-control' placeholder='Give Your Feedback Here' onBlur={e => setComment(e.target.value)}></textarea>
                              <label className='mt-4' htmlFor="rating">Give A Rating Here</label>
                              <select id='rating' className="form-select" required onClick={e => setReview(e.target.value)}>
                                    <option value="https://i.ibb.co/PmfvwFd/five-star.png">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                                    <option value="https://i.ibb.co/zZxmyhs/four-star.png">&#9733;&#9733;&#9733;&#9733;</option>
                                    <option value="https://i.ibb.co/yXcWxCL/three-star.png">&#9733;&#9733;&#9733;</option>
                                    <option value="https://i.ibb.co/vYQvFD6/two-star.png">&#9733;&#9733;</option>
                                    <option value="https://i.ibb.co/2PTFTR9/one-star.png">&#9733;</option>
                              </select>
                              <input required type="submit" value="Submit" className='btn btn-success my-3' />
                        </form>
                  </div>
            </Container>
      )
}

export default Feedback