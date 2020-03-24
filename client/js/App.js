import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../config/api';
import Drawer from 'react-native-drawer';
import {UserContextProvider} from './context/UserContext';

export const DrawerContext = React.createContext();

import FavesProvider from './context/FavesContext';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }
  setDrawerOpen = open => {
    this.setState({isDrawerOpen: open});
  };
  render() {
    return (
      <ApolloProvider client={client}>
        <UserContextProvider>
          <FavesProvider>
            <NavigationContainer>
              <RootNav />
            </NavigationContainer>
          </FavesProvider>
        </UserContextProvider>
      </ApolloProvider>
    );
  }
}
