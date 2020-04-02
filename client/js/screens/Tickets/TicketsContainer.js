import React, {Component} from 'react';
import Tickets from './Tickets';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';

const OWNED_TICKETS = gql`
  {
    users {
      id
      ownedTickets {
        id
        title
        description
        date
        time
        price
        thumbnail_url
        location_name
        location_address
        theme {
          hexcode
        }
        speakers {
          id
          profile_picture
          owner {
            name
          }
        }
      }
    }
  }
`;

export default class TicketsContainer extends Component {
  render() {
    return (
      <Query query={OWNED_TICKETS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          if (data)
            return (
              <UserContext.Consumer>
                {({user}) => {
                  const currentUser = user;

                  const ticketOwner = data.users.filter(user =>
                    currentUser.id.includes(user.id),
                  );
                  return (
                    <Tickets
                      ticketOwner={ticketOwner}
                      navigation={this.props.navigation}
                      route={this.props.route}
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
