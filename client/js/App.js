import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../config/api';
import {UserContextProvider} from './context/UserContext';

import FavesProvider from './context/FavesContext';
import YoutubeDataProvider from './context/YoutubeData';
console.disableYellowBox = true;
export default class App extends Component {
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
