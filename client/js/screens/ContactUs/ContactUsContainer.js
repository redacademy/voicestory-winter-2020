import React, {Component} from 'react';
import ContactUs from './ContactUs';
import PropTypes from 'prop-types';

export default class ContactUsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ContactUs />;
  }
}

ContactUsContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
