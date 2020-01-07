import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Showcase, Main, Team } from '../components/about';

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

      <Team />
    </Fragment>
  )
}