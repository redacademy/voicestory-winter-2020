import React, {Component} from 'react';
import Videos from './Videos';

export default class VideosContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.route.name === 'Fav' ? (
      <VideoList
        route={route}
        navigation={navigation}
        //TODO - add fave id list
        // idList={idList}
      />
    ) : (
      <Videos navigation={this.props.navigation} route={this.props.route} />
    );
  }
}
