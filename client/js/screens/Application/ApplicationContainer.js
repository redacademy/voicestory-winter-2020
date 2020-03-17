import React, {Component} from 'react';
import Application from './Application';

export default class ApplicationContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Application navigation={this.props.navigation} />;
  }
}
