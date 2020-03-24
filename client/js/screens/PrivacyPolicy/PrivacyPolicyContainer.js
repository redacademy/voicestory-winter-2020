import React, {Component} from 'react';
import PrivacyPolicy from './PrivacyPolicy';

export default class PrivacyPolicyContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <PrivacyPolicy navigation={this.props.navigation} />;
  }
}
