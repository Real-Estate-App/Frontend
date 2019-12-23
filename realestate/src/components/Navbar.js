import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Logo from '../images/logo/logo.png';
import { connect } from 'react-redux';

class NavBar extends Component {


    render() {
        return (
            <Fragment>
                {/* Top Bar */}
                <section id="top-bar" className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <i className="fas fa-phone"></i>
                                <span>(617)-555-5555</span>
                            </div>
                            <div className="col-md-5">
                                <i className="fas fa-envelope-open"></i>
                                <span>contact@btrealestate.com</span>
                            </div>
                            <div className="col-md-3">
                                <div className="social text-right">
                                    <a href="https://twitter.com/">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.facebook.com/">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.pinterest.com/">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nav Bar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                    <div className="container">
                        <Link className="navbar-brand">
                            <img src={Logo} className="logo" alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item active mr-3">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link" to="/listings">Featured Listings</NavLink>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link" to="/register">
                                        <i className="fas fa-user-plus"></i>
                                        <span>Register</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mr-3">
                                    <NavLink className="nav-link" to="/login">
                                        <i className="fas fa-sign-in-alt"></i>
                                        <span>Login</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

// const mapStateToProps = ({ }) => {

// };

export default connect(null, {})(NavBar);