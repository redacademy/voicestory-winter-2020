import React, {Component} from 'react';
import Explore from './Explore';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import PropTypes from 'prop-types';

const ALL_SPEAKERS = gql`
  {
    speakers {
      id
      profile_picture
      owner {
        name
      }
    }
  }
`;
export default class ExploreContainer extends Component {
  render() {
    return (
      <Query query={ALL_SPEAKERS}>
        {({data, loading, error}) => {
          if (loading) return <Loader />;
          if (error) return <Error name={'Speakers'} />;
          return (
            <Explore
              navigation={this.props.navigation}
              route={this.props.route}
              speakers={data.speakers}
            />
          );
        }}
      </Query>
    );
  }
}

ExploreContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
