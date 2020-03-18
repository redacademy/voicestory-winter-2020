import React, {Component} from 'react';
import Videos from './Videos';

export default class VideosContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Videos navigation={this.props.navigation} route={this.props.route} />
    );
  }
}
