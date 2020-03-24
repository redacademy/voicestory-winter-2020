import React, {Component} from 'react';
import AboutUs from './AboutUs';

export default class AboutUsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AboutUs navigation={this.props.navigation} />;
  }
}
