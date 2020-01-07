import React from 'react';
import Kyle from '../../images/realtors/kyle.jpg'


// later convert to a dynamic component

export default function TeamMember() {
    return (
        <div className="col-md-4">
            <img src={Kyle} alt="" className="rounded-circle mb-3" />
            <h4>Kyle Brown</h4>
            <p className="text-success">
                <i className="fas fa-award text-success mb-3"></i> Realtor
            </p>
            <hr />
            <p>
                <i className="fas fa-phone"></i> (555)-555-5555
            </p>
            <p>
                <i className="fas fa-envelope-open"></i> kyle@btrealestate.com
            </p>
        </div>
    );
};