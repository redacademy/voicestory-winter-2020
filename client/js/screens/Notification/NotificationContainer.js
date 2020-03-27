import React, {Component} from 'react';
import Notification from './Notification';

export default class NotificationContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Notification navigation={this.props.navigation} />;
  }
}
