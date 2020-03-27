import React, {Component} from 'react';
import UserProfile from './UserProfile';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import styles from './styles';
import {UserContext} from '../../context/UserContext';
const ALL_USERS = gql`
  {
    users {
      id
      email
      name
      isSpeaker {
        id
        profile_picture
        title
        description
        videos {
          id
          title
        }
      }
      favouritedVideos {
        id
        title
      }
      ownedTickets {
        id
        title
      }
    }
  }
`;
export default class UserProfileContainer extends Component {
  render() {
    return (
      <Query query={ALL_USERS}>
        {({data, loading, error}) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return (
            <UserContext.Consumer>
              {({user}) => {
                const viewer = user;
                const currentUser = data.users.filter(user =>
                  viewer.id.includes(user.id),
                );
                return (
                  <UserProfile
                    navigation={this.props.navigation}
                    user={currentUser}
                    style={styles.container}
                  />
                );
              }}
            </UserContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
