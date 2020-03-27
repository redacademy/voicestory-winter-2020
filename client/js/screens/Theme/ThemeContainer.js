import React, {Component} from 'react';
import Theme from './Theme';
import {YoutubeDataContext} from '../../context/YoutubeData';
class ThemeContainer extends Component {
  render() {
    return (
      <YoutubeDataContext.Consumer>
        {value => (
          <Theme
            theme={this.props.route.params.theme}
            playlists={value.playlists}
            playlistVideos={value.playlistVideos}
            videos={value.videos}
            route={this.props.route}
            navigation={this.props.navigation}
          />
        )}
      </YoutubeDataContext.Consumer>
    );
  }
}

export default ThemeContainer;
