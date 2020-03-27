import React, {Component} from 'react';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {Text} from 'react-native';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/UserContext';
import Search from './Search';

const SEARCH = gql`
  {
    speakers {
      id
      owner {
        name
      }
    }
    events {
      id
      title
    }
    videos {
      id
      title
    }
  }
`;
export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={SEARCH}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error :(</Text>;
          const speakers = data.speakers.map(speaker => speaker.owner);
          console.log(speakers);
          if (data)
            return (
              <Search
                input={this.input}
                events={data.events}
                videos={data.videos}
                speakers={speakers}
                navigation={this.props.navigation}
                route={this.props.route}
              />
            );
        }}
      </Query>
    );
  }
}
