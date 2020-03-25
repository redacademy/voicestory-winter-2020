import React, {Component} from 'react';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Events from '../Events/Events';
import Loader from '../../components/Loader';
const ALL_EVENTS = gql`
  {
    events {
      id
      title
      description
      thumbnail_url
      location_name
      location_address
      date
      time
      location {
        id
      }
      price
      maxTickets
      soldTickets
      speakers {
        id
        profile_picture
        title
        linkedin
        facebook
        description
        owner {
          name
          email
        }
      }
    }
  }
`;
export default class EventsContainer extends Component {
  render() {
    return (
      <Query query={ALL_EVENTS}>
        {({data, loading, error}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          return (
            <Events navigation={this.props.navigation} events={data.events} />
          );
        }}
      </Query>
    );
  }
}
