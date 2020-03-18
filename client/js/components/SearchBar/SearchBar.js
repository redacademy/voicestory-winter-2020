import {SearchBar} from 'react-native-elements';
import React, {Component} from 'react';

export default class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <SearchBar
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
        searchIcon={null}
        containerStyle={{
          backgroundColor: '#DB4F48',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{
          backgroundColor: '#9F3833',
          borderRadius: 10,
        }}
        inputStyle={{
          fontFamily: 'Lato-Regular',
          fontSize: 15,
        }}
        placeholderTextColor="#FBF7EF"
      />
    );
  }
}
