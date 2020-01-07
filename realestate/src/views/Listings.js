import React, { Fragment } from 'react';
import Listings from '../components/listings/Listings';

export default function FeatureListings() {
    return (
        <Fragment>
            {/* <section id="bc" className="mt-3">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">
                                    <i className="fas fa-home"></i> Home</a>
                            </li>
                            <li className="breadcrumb-item active"> Browse Listings</li>
                        </ol>
                    </nav>
                </div>
            </section> */}

            <section id="listings" className="py-4">
                <div className="container">
                    <div className="row">
                        <Listings />
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            {/* <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">&laquo;</a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">&raquo;</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
};