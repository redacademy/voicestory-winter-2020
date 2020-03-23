import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../config/api';
import Drawer from 'react-native-drawer';

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
        {/* <DrawerContext.Provider
          value={{isOpen: this.isDrawerOpen, setOpen: this.setDrawerOpen}}>
          <NavigationContainer>
            <RootNav />
          </NavigationContainer>
        </DrawerContext.Provider> */}
        <FavesProvider>
          <NavigationContainer>
            <RootNav />
          </NavigationContainer>
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
