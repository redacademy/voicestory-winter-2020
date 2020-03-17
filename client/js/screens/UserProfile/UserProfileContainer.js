import React, {Component} from 'react';
import UserProfile from './UserProfile';

export default class UserProfileContainer extends Component {
  render() {
    return <UserProfile navigation={this.props.navigation} />;
  }
}
