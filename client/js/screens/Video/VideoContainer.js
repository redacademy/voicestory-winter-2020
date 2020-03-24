import React, {Component} from 'react';
import Video from './Video';
import {FavesContext} from '../../context/FavesContext';
export default class VideoContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <Video
            video={this.props.route.params.video}
            navigation={this.props.navigation}
            route={this.props.route}
            faveIds={value.faveIds}
            addFave={value.addFaveVideo}
            removeFave={value.removeFaveVideo}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}
