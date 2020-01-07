import React, { Fragment } from 'react';
import Listings from '../components/listings/Listings';
import { Link } from 'react-router-dom';

export default function FeatureListings() {
    return (
        <Fragment>
            <section id="showcase-inner" class="py-5 text-white">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-12">
                            <h1 class="display-4">Browse Our Properties</h1>
                            <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="bc" className="mt-3">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item active"> Browse Listings</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section id="listings" className="py-4">
                <div className="container">
                    <div className="row">
                        <Listings header={false} />
                    </div>

                    <div className="row">
                        <div className="col-md-12 ">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <Link className="page-link" to="#">&laquo;</Link>
                                </li>
                                <li className="page-item active">
                                    <Link className="page-link" to="#">1</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">2</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">3</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">&raquo;</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
};