import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../config/api';
import {UserContextProvider} from './context/UserContext';

export const DrawerContext = React.createContext();

import FavesProvider from './context/FavesContext';
import YoutubeDataProvider from './context/YoutubeData';
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
            <YoutubeDataProvider>
              <NavigationContainer>
                <RootNav />
              </NavigationContainer>
            </YoutubeDataProvider>
          </FavesProvider>
        </UserContextProvider>
      </ApolloProvider>
    );
  }
}
