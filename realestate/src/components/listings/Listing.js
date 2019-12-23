import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../images/homes/home-1.jpg';

export default function Listing(props) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card listing-preview">
                <img className="card-img-top" src={home} alt="" />
                <div className="card-img-overlay">
                    <h2>
                        <span className="badge badge-secondary text-white">$490,000</span>
                    </h2>
                </div>
                <div className="card-body">
                    <div className="listing-heading text-center">
                        <h4 className="text-primary">45 Drivewood Circle</h4>
                        <p>
                            <i className="fas fa-map-marker text-secondary"></i>
                            <span>Norwood MA, 02062</span>
                        </p>
                    </div>
                    <hr />
                    <div className="row py-2 text-secondary">
                        <div className="col-6">
                            <i className="fas fa-th-large"></i>
                            <span>Sqft: 2500</span>
                        </div>
                        <div className="col-6">
                            <i className="fas fa-car"></i>
                            <span>Garage: 2</span>
                        </div>
                    </div>
                    <div className="row py-2 text-secondary">
                        <div className="col-6">
                            <i className="fas fa-bed"></i>
                            <span>Bedrooms: 3</span>
                        </div>
                        <div className="col-6">
                            <i className="fas fa-bath"></i>
                            <span>Bathrooms: 2</span>
                        </div>
                    </div>
                    <hr />
                    <div className="row py-2 text-secondary">
                        <div className="col-6">
                            <i className="fas fa-user"></i>
                            <span>Kyle Brown</span>
                        </div>
                    </div>
                    <div className="row text-secondary pb-2">
                        <div className="col-6">
                            <i className="fas fa-clock"></i>
                            <span>5 days ago</span>
                        </div>
                    </div>
                    <hr />
                    <Link href="listing.html" className="btn btn-primary btn-block">More Info</Link>
                </div>
            </div>
        </div>
    );
};