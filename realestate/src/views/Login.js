import React, { Component } from 'react';

class Login extends Component {

  state = {
    user: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      user: {
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted')
  }

  render() {
    return (
      <section id="login" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header bg-primary text-white">
                  <h4>
                    <i className="fas fa-sign-in-alt"></i> Login
                  </h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" name="username" className="form-control" value={this.state.user.username} required />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" name="password" className="form-control" value={this.state.user.password} required />
                    </div>
                    <input type="submit" value="Login" className="btn btn-secondary btn-block" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Login;