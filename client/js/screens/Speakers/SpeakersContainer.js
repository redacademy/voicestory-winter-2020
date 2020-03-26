import React, {Component} from 'react';
import Speakers from './Speakers';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import {Text} from 'react-native';
const ALL_USERS = gql`
  {
    users {
      id
      email
      name
      isSpeaker {
        profile_picture
        title
        linkedin
        facebook
        owner {
          name
        }
        description
        videos {
          id
          title
        }
      }
    }
  }
`;
export default class SpeakersContainer extends Component {
  render() {
    return (
      <Query query={ALL_USERS}>
        {({data, loading, error}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          console.log('SpeakerContainer', data.users);
          return (
            <Speakers navigation={this.props.navigation} users={data.users} />
          );
        }}
      </Query>
    );
  }
}
