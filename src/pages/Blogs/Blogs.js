import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
      return (
            <div className="accordion mt-5 pt-5 col-11 col-md-10 col-lg-6 mx-auto text-start" id="accordionExample">
                  <Helmet>
                        <title>Blogs - Luxurious Car</title>
                  </Helmet>
                  <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What are the differences between Javascript and NodeJS ?
                              </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                    There are many differences between JS and NodeJS. Some of them are...
                                    <ol type='i'>
                                          <li>
                                                <p>JavaScript is a Scripting and Programming Language managed by ECMAScript.</p>
                                                <p>On the other hand, NodeJS is a Javascript Runtime environment. It allows to run JS on the server side.</p>
                                          </li>
                                          <li>
                                                <p>JavaScript is used in frontend development</p>
                                                <p>NodeJs is used in backend development</p>
                                          </li>
                                          <li>
                                                <p>JavaScript runs only on browsers.</p>
                                                <p>Using NodeJS we can run JavaScript outside of the browsers</p>
                                          </li>
                                          <li>
                                                <p>JavaScript can play with DOM (Document Object Model).</p>
                                                <p>NodeJS is not capable to play with DOM</p>
                                          </li>
                                    </ol>
                              </div>
                        </div>
                  </div>

                  <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What are the differences between SQL and NoSQL
                              </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                    <ol>
                                          <li>
                                                SQL databases are relational. On the other hand NoSQL database are non-relational
                                          </li>
                                          <li>
                                                SQL databases are vertically alignable. But NoSQL databases are horizontally scalable
                                          </li>
                                          <li>
                                                SQL Databases are table-based. NoSQL databases are document-based.
                                          </li>
                                    </ol>
                              </div>
                        </div>
                  </div>
                  <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    What is the purpose of JWT and how does it work
                              </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                    <p>JWT is mainly used for sharing security information between server side and client side.</p>
                                    <p>Encoded JSON objects with a set of claims are contained by each JWT.</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Blogs;