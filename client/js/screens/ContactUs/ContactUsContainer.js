import React, {Component} from 'react';
import ContactUs from './ContactUs';

export default class ContactUsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ContactUs navigation={this.props.navigation} />;
  }
}
