import React, {Component} from 'react';
import Home from './Home';
import PropTypes from 'prop-types';

export default class HomeContainer extends Component {
  render() {
    return <Home navigation={this.props.navigation} route={this.props.route} />;
  }
}

HomeContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
