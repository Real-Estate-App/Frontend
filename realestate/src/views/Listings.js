import React, { Fragment } from 'react';

export default function Listings() {
    return (
        <Fragment>
            <section id="bc" class="mt-3">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="index.html">
                                    <i class="fas fa-home"></i> Home</a>
                            </li>
                            <li class="breadcrumb-item active"> Browse Listings</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section id="listings" class="py-4">
                <div class="container">
                    <div class="row">

                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#">&laquo;</a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="#">1</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">&raquo;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    );
};