import React, {Component} from 'react';
import Tickets from './Tickets';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';
import PropTypes from 'prop-types';

export const OWNED_TICKETS = gql`
  query user($UserWhereUniqueInput: UserWhereUniqueInput!) {
    user(where: $UserWhereUniqueInput) {
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
        speakers {
          id
          profile_picture
          owner {
            name
            email
          }
        }
      }
    }
  }
`;

export default class TicketsContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => {
          const currentUser = user.id;
          return (
            <Query
              query={OWNED_TICKETS}
              variables={{UserWhereUniqueInput: {id: currentUser}}}>
              {({loading, error, data}) => {
                if (loading) return <Loader />;
                if (error) return <Text>Error :(</Text>;
                return (
                  <Tickets
                    ticketOwner={data.user}
                    navigation={this.props.navigation}
                    route={this.props.route}
                  />
                );
              }}
            </Query>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

TicketsContainer.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
};
