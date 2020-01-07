import React from 'react';

// later convert this to a dynamic component that renders based on data from server
import Kyle from '../../images/realtors/kyle.jpg'
import Mark from '../../images/realtors/mark.jpg'
import Jenny from '../../images/realtors/jenny.jpg'
import TeamMember from './TeamMember';

export default function Team() {
    return (
        <section id="team" className="py-5">
            <div className="container">
                <h2 className="text-center">Our Team</h2>
                <div className="row text-center">
                    <TeamMember />

                    <div className="col-md-4">
                        <img src={Mark} alt="" className="rounded-circle mb-3" />
                        <h4>Mark Hudson</h4>
                        <p className="text-success">Realtor</p>
                        <hr />
                        <p>
                            <i className="fas fa-phone"></i> (444)-444-4444</p>
                        <p>
                            <i className="fas fa-envelope-open"></i> mark@btrealestate.co</p>
                    </div>

                    <div className="col-md-4">
                        <img src={Jenny} alt="" className="rounded-circle mb-3" />
                        <h4>Jenny Johnson</h4>
                        <p className="text-success">Realtor</p>
                        <hr />
                        <p>
                            <i className="fas fa-phone"></i> (333)-333-3333</p>
                        <p>
                            <i className="fas fa-envelope-open"></i> jenny@btrealestate.co</p>
                    </div>
                </div>
            </div>
        </section>
    );
};