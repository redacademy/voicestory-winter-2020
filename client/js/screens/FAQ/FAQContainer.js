import React, {Component} from 'react';
import FAQ from './FAQ';

export default class FAQContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <FAQ navigation={this.props.navigation} />;
  }
}
