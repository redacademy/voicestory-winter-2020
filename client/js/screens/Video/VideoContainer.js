import React, {Component} from 'react';
import Video from './Video';

export default class VideoContainer extends Component {
  render() {
    return (
      <Video
        item={this.props.route.params.item}
        navigation={this.props.navigation}
        route={this.props.route}
      />
    );
  }
}
