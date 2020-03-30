import React, {Component} from 'react';
import Notification from './Notification';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
const ALL_NOTIFICATIONS = gql`
  {
    notifications {
      id
      timestamp
      announcement
    }
  }
`;
export default class NotificationContainer extends Component {
  render() {
    return (
      <Query query={ALL_NOTIFICATIONS}>
        {({data, loading, error}) => {
          if (loading) return <Loader />;
          if (error) return <Error />;
          return (
            <Notification
              navigation={this.props.navigation}
              notifications={data.notifications}
            />
          );
        }}
      </Query>
    );
  }
}
