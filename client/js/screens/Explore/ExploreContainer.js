import React, {Component} from 'react';
import Explore from './Explore';

export default class ExploreContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return <Explore navigation={this.props.navigation} />;
  }
}
