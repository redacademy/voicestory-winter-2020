import React, {Component} from 'react';
import Themes from './Themes';
import PropTypes from 'prop-types';

export default class ThemesContainer extends Component {
  render() {
    return <Themes navigation={this.props.navigation} />;
  }
}
ThemesContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
