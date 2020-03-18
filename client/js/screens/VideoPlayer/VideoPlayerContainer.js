import React, {Component} from 'react';
import VideoPlayer from './VideoPlayer';

export default class VideoContainer extends Component {
  render() {
    return (
      <VideoPlayer
        // item={this.props.route.params.item}
        navigation={this.props.navigation}
        // route={this.props.route}
      />
    );
  }
}
