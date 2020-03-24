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
        clearIcon={{
          color: '#FBF7EF',
        }}
        containerStyle={{
          backgroundColor: '#DB4F48',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{
          backgroundColor: '#9F3833',
          borderRadius: 10,
          width: 250,
        }}
        inputStyle={{
          fontFamily: 'Lato-Regular',
          color: '#FBF7EF',
          fontSize: 15,
        }}
        placeholderTextColor="#FBF7EF"
      />
    );
  }
}
