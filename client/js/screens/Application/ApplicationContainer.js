import React, {Component} from 'react';
import Application from './Application';
import PropTypes from 'prop-types';

export default class ApplicationContainer extends Component {
  render() {
    return <Application navigation={this.props.navigation} />;
  }
}

ApplicationContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
