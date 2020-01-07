import React from 'react';
import Img from '../../images/realtors/kyle.jpg';
// remove img once backend is deployed 

export default function Seller() {
    return (
        // change to became dynamic based on database
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" src={Img} alt="Seller of the month" />
                <div className="card-body">
                    <h5 className="card-title">Seller Of The Month</h5>
                    <h6 className="text-secondary">Kyle Brown</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt amet, illo itaque similique repellat. content.
                </p>
                </div>
            </div>
        </div>
    );
};