import React, { Component } from 'react';
import Listing from './Listing';

class Listings extends Component {

    render() {
        return (
            <section className='py-5' id='listings'>
                <div className='container'>
                    <h3 className='text-center mb-3'> Lastest Listings</h3>
                    <div className='row'>
                        {/* latest three listings */}
                        <Listing />
                        <Listing />
                        <Listing />
                    </div>
                </div>
            </section>
        );
    }
};

export default Listings;