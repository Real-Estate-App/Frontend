import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Logo from '../images/logo/logo.png';
import { connect } from 'react-redux';

class NavBar extends Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
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
        )
    }
}

// const mapStateToProps = ({ }) => {

// };

export default connect(null, {})(NavBar);