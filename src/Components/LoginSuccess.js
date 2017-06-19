import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter  } from 'react-router'
class LoginSuccess extends Component {


  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

    render() {

          let {email, password} = this.state;

              return (
      <div>
      <form name="loginForm" onSubmit={this.onSubmit}>
        <div >
          <div >
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
          </div>

          <div >
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
          </div>
        </div>

        <input type="submit" value="Login" />

     
      </form>
      </div>
    )


    }

    onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    //this.props.login(email, password);
    alert(this.props)
    this.setState({
      email: '',
      password: ''
    });

    this.context.router.push('/LoginSuccess');

  }

}


export default withRouter(LoginSuccess);