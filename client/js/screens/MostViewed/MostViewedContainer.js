import React, {Component} from 'react';
import MostViewed from './MostViewed';

export default class MostViewedContainer extends Component {
  render() {
    return (
      <MostViewed navigation={this.props.navigation} route={this.props.route} />
    );
  }
}
