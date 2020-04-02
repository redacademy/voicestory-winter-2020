import React, {Component} from 'react';
import Video from './Video';
import {FavesContext} from '../../context/FavesContext';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import PropTypes from 'prop-types';

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
      }
    }
  }
`;

export default class VideoContainer extends Component {
  render() {
    return (
      <Query query={ALL_USERS}>
        {({data, loading, error}) => {
          if (loading) return <Loader />;
          if (error) return <Error name={'video'} height={'100%'} />;

          return (
            <FavesContext.Consumer>
              {value => (
                <Video
                  users={data.users}
                  video={this.props.route.params.video}
                  navigation={this.props.navigation}
                  route={this.props.route}
                  faveIds={value.faveIds}
                  addFave={value.addFaveVideo}
                  removeFave={value.removeFaveVideo}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

VideoContainer.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
};
