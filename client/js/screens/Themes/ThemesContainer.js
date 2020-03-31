import React, {Component} from 'react';
import Themes from './Themes';

export default class ThemesContainer extends Component {
  render() {
    return <Themes navigation={this.props.navigation} />;
  }
}
ThemeContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
