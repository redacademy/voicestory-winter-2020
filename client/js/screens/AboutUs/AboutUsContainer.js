import React, {Component} from 'react';
import AboutUs from './AboutUs';
import PropTypes from 'prop-types';

export default class AboutUsContainer extends Component {
  render() {
    return <AboutUs />;
  }
}

AboutUsContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
