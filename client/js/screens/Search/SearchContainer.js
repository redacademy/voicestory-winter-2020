import React, {Component} from 'react';
import Search from './Search';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Search navigation={this.props.navigation} />;
  }
}
