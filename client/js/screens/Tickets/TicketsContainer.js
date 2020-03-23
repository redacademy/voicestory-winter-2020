import React, {Component} from 'react';
import Tickets from './Tickets';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Loader from '../../components/Loader';

const OWNED_TICKETS = gql`
  {
    users {
      ownedTickets {
        title
        description
        date
        time
        price
        location_name
        location_address
        location {
          id
          latitude
          longitude
        }
        speakers {
          id
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
          const ownedTickets = data.users.map(user => user.ownedTickets);
          // const ownedTicket = ownedTickets.map(ownedTicket => ownedTicket);
          // console.log(ownedTicket);

          if (data)
            return (
              <Tickets
                tickets={ownedTickets}
                navigation={this.props.navigation}
              />
            );
        }}
      </Query>
    );
  }
}
