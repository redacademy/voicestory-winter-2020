import React, {Component} from 'react';
import Settings from './Settings';

export default class SettingsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Settings navigation={this.props.navigation} />;
  }
}
