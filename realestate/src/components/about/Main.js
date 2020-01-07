import React from 'react';
import Seller from './Seller';
import MainImg from '../../images/site/about.jpg';

export default function Main() {
    return (
        <section id="about" className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>We Search For The Perfect Home</h2>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                        <img src={MainImg} alt="office" id='aboutImg' />
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse officia repudiandae ad saepe ex, amet neque quod accusamus rem quia magnam magni dolorum facilis ullam minima perferendis? Exercitationem at quaerat commodi id libero eveniet harum perferendis laborum molestias quia.</p>
                    </div>
                    <Seller />
                </div>
            </div>
        </section>
    );
};