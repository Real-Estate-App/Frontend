import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Register extends Component {

  state = {
    newUser: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: ''
    },
    password2: ''
  }

  handleChange = e => {
    this.setState({
      newUser: {
        [e.target.name]: e.target.value
      },
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted')
  }

  render() {
    return (
      <Fragment>
        <section id="register" className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header bg-primary text-white">
                    <h4 className='text-center'>
                      <i className="fas fa-user-plus"></i> Register
                    </h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit} >
                      <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} type="text" name="first_name" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} type="text" name="last_name" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Username</label>
                        <input onChange={this.handleChange} type="text" name="username" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} type="email" name="email" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.handleChange} type="password" name="password" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Confirm Password</label>
                        <input onChange={this.handleChange} type="password" name="password2" className="form-control" required />
                      </div>
                      <input type="submit" value="Register" className="btn btn-secondary btn-block" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default connect(null, {})(Register);