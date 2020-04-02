import React, {Component} from 'react';
import CheckoutConfirmation from './CheckoutConfirmation';
import PropTypes from 'prop-types';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {UserContext} from '../../context/UserContext';
const ADD_TICKETS = gql`
  mutation updateUser(
    $UserWhereUniqueInput: UserWhereUniqueInput!
    $UserUpdateInput: UserUpdateInput!
  ) {
    updateUser(where: $UserWhereUniqueInput, data: $UserUpdateInput) {
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
        {({user}) => (
          <Mutation
            mutation={ADD_TICKETS}
            variables={{
              UserWhereUniqueInput: {id: user.id},
              UserUpdateInput: {
                ownedTickets: {
                  connect: {id: this.props.route.params.event.id},
                },
              },
            }}>
            {(updateUser, {data, error}) => {
              console.log('Data', data, 'Error', error);
              return (
                <CheckoutConfirmation
                  event={this.props.route.params.event}
                  navigation={this.props.navigation}
                  updateUser={updateUser}
                />
              );
            }}
          </Mutation>
        )}
      </UserContext.Consumer>
    );
  }
}

CheckoutConfirmationContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
