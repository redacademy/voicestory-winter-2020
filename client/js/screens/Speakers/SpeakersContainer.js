import React, {Component} from 'react';
import Speakers from './Speakers';

export default class SpeakersContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Speakers navigation={this.props.navigation} />;
  }
}
