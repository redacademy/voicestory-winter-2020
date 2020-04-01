import React, {Component} from 'react';
import FAQ from './FAQ';
import PropTypes from 'prop-types';

export default class FAQContainer extends Component {
  render() {
    return <FAQ />;
  }
}

FAQContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
