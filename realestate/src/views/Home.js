import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import Listings from '../components/listings/Listings';
import { Showcase, Services } from '../components/home/';

export default function Home() {
    return (
        <Fragment>
            <Showcase />
            <Listings header={true} />
            <Services />
        </Fragment>
    );
};