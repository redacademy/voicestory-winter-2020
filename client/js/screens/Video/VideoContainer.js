import React, {Component} from 'react';
import Video from './Video';

export default class VideoContainer extends Component {
  render() {
    return (
      <Video
        video={this.props.route.params.video}
        navigation={this.props.navigation}
        route={this.props.route}
      />
    );
  }
}
