import React, {Component} from 'react';
import SpeakerProfile from './SpeakerProfile';

export default class SpeakerProfileContainer extends Component {
  render() {
    return (
      <SpeakerProfile
        speaker={this.props.route.params.speaker}
        navigation={this.props.navigation}
      />
    );
  }
}
