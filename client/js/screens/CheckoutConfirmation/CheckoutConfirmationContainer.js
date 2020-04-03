import React, {Component} from 'react';
import CheckoutConfirmation from './CheckoutConfirmation';
import PropTypes from 'prop-types';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {UserContext} from '../../context/UserContext';
import {OWNED_TICKETS} from '../Tickets/TicketsContainer';
import {Text} from 'react-native';

const ADD_TICKETS = gql`
  mutation updateUser(
    $UserWhereUniqueInput: UserWhereUniqueInput!
    $UserUpdateInput: UserUpdateInput!
  ) {
    updateUser(where: $UserWhereUniqueInput, data: $UserUpdateInput) {
      id
      ownedTickets {
        id
        title
        description
      }
    }
  }
`;
export default class CheckoutConfirmationContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => {
          const currentUser = user.id;
          const refetchQueries = [
            {
              query: OWNED_TICKETS,
              variables: {UserWhereUniqueInput: {id: currentUser}},
            },
          ];
          return (
            <Mutation
              refetchQueries={refetchQueries}
              mutation={ADD_TICKETS}
              variables={{
                UserWhereUniqueInput: {id: user.id},
                UserUpdateInput: {
                  ownedTickets: {
                    connect: {id: this.props.route.params.event.id},
                  },
                },
              }}>
              {(updateUser, {loading, data, error}) => {
                if (error) return <Text>error</Text>;
                if (loading) return <Text>Loading</Text>;
                return (
                  <CheckoutConfirmation
                    event={this.props.route.params.event}
                    navigation={this.props.navigation}
                    updateUser={updateUser}
                  />
                );
              }}
            </Mutation>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

CheckoutConfirmationContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
