import React, { Fragment } from 'react';
import Seller from './Seller';
import MainImg from '../../images/site/about.jpg';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <Fragment>
            <section id="about" className="py-4">
                <div className="container">
                    {/* Top content of the about page */}
                    <div className="row">
                        {/* Talking about the company  */}
                        <div className="col-md-8">
                            <h2>We Search For The Perfect Home</h2>
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                            <img src={MainImg} alt="office" id='aboutImg' />
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse officia repudiandae ad saepe ex, amet neque quod accusamus rem quia magnam magni dolorum facilis ullam minima perferendis? Exercitationem at quaerat commodi id libero eveniet harum perferendis laborum molestias quia.</p>
                        </div>

                        {/* Component for displaying current seller of the month */}
                        <Seller />
                    </div>
                </div>
            </section>
            <section id="work" className="bg-dark text-white text-center">
                <h2 className="display-4">We Work For You</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit aperiam, unde aliquid at similique!</h4>
                <hr />
                <Link to="/listings" className="btn btn-secondary text-white btn-lg">
                    View Our Featured Listings
                </Link>
            </section>
        </Fragment>
    );
};