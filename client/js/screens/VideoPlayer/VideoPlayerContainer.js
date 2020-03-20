import React, {Component} from 'react';
import VideoPlayer from './VideoPlayer';
import {FavesContext} from '../../context/FavesContext';
export default class VideoContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <VideoPlayer
            item={this.props.route.params.item}
            addFave={value.addFaveVideo}
            removeFave={value.removeFaveVideo}
            faveIds={value.faveIds}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}
