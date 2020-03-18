import React, {Component} from 'react';
import Explore from './Explore';

export default class ExploreContainer extends Component {
  render() {
    return (
      <Explore navigation={this.props.navigation} route={this.props.route} />
    );
  }
}
