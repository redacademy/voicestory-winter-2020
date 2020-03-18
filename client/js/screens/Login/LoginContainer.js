import React, {Component} from 'react';
import Login from './Login';

export default class LoginContainer extends Component {
  render() {
    console.log('Login', this.props);
    return (
      <Login navigation={this.props.navigation} route={this.props.route} />
    );
  }
}
