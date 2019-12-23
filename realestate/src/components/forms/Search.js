import React, { Component } from 'react';
import { StateOptions, Bedrooms, Price } from './options';

class Search extends Component {


  render() {
    return (
      <div className="search">
        <form action="search.html">
          {/* Form Row 1 */}
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label className="sr-only">Keywords</label>
              <input type="text" name="keywords" className="form-control" placeholder="Keyword (Pool, Garage, etc)" />
            </div>

            <div className="col-md-4 mb-3">
              <label className="sr-only">City</label>
              <input type="text" name="city" className="form-control" placeholder="City" />
            </div>

            <div className="col-md-4 mb-3">
              <label className="sr-only">State</label>
              <StateOptions />
            </div>
          </div>
          {/* Form Row 2 */}
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label className="sr-only">Bedrooms</label>
              <Bedrooms />
            </div>
            <div className="col-md-6 mb-3">
              <Price />
            </div>
          </div>
          <button className="btn btn-secondary btn-block mt-4" type="submit">Submit form</button>
        </form>
      </div>
    );
  }
};

export default Search;