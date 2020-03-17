import React, {Component} from 'react';
import QRCode from './QRCode';

export default class QRCodeContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <QRCode navigation={this.props.navigation} />;
  }
}
