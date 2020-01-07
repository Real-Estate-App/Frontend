import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Showcase, Main } from '../components/about'

export default function About() {
  return (
    <Fragment>
      <Showcase />

      {/* think about making a component for this */}
      <section id="bc" className="mt-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to='/'>
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="breadcrumb-item active"> About</li>
            </ol>
          </nav>
        </div>
      </section>

      <Main />

      <section id="work" className="bg-dark text-white text-center">
        <h2 className="display-4">We Work For You</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit aperiam, unde aliquid at similique!</h4>
        <hr />
        <a href="listings.html" className="btn btn-secondary text-white btn-lg">View Our Featured Listings</a>
      </section>

      <section id="team" className="py-5">
        <div className="container">
          <h2 className="text-center">Our Team</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <img src="assets/img/realtors/kyle.jpg" alt="" className="rounded-circle mb-3" />
              <h4>Kyle Brown</h4>
              <p className="text-success">
                <i className="fas fa-award text-success mb-3"></i> Realtor</p>
              <hr />
              <p>
                <i className="fas fa-phone"></i> (555)-555-5555</p>
              <p>
                <i className="fas fa-envelope-open"></i> kyle@btrealestate.co</p>
            </div>

            <div className="col-md-4">
              <img src="assets/img/realtors/mark.jpg" alt="" className="rounded-circle mb-3" />
              <h4>Mark Hudson</h4>
              <p className="text-success">Realtor</p>
              <hr />
              <p>
                <i className="fas fa-phone"></i> (444)-444-4444</p>
              <p>
                <i className="fas fa-envelope-open"></i> mark@btrealestate.co</p>
            </div>

            <div className="col-md-4">
              <img src="assets/img/realtors/jenny.jpg" alt="" className="rounded-circle mb-3" />
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
    </Fragment>
  )
}