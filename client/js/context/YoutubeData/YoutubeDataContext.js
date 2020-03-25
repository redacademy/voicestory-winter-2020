import React, {createContext, Component} from 'react';
export const YoutubeDataContext = createContext();
import {key} from '../../apiKeys';
import moment from 'moment';

class YoutubeDataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      mostViewed: [],
      videos: [],
      playlists: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=UCNaiQ7SzX7OQGxi2Kcho_aQ&part=snippet,id&order=date&maxResults=3`,
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({data});

        this.state.data.items.map(video => {
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?id=${video.id.videoId}&key=${key}&part=snippet,contentDetails,statistics`,
          )
            .then(resp => resp.json())
            .then(async data => {
              this.setState({videos: [...this.state.videos, data]});

              let sorted = await this.state.videos.sort(
                (a, b) =>
                  moment(b.items[0].snippet.publishedAt).format('X') -
                  moment(a.items[0].snippet.publishedAt).format('X'),
              );
              this.setState({videos: sorted});

              this.setState({mostViewed: [...this.state.videos]});
              let mostViewed = await this.state.mostViewed.sort(
                (a, b) =>
                  b.items[0].statistics.viewCount -
                  a.items[0].statistics.viewCount,
              );
              this.setState({mostViewed});
            })
            .catch(e => {
              throw new Error(e);
            });
        });
      })
      .catch(e => {
        throw new Error(e);
      });

    fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCNaiQ7SzX7OQGxi2Kcho_aQ&maxResults=3&key=${key}`,
    )
      .then(resp => resp.json())
      .then(data => this.setState({playlists: [...data]}))
      .catch(e => {
        throw new Error(e);
      });
  }

  render() {
    return (
      <YoutubeDataContext.Provider
        value={{
          ...this.state,
        }}>
        {this.props.children}
      </YoutubeDataContext.Provider>
    );
  }
}

export default YoutubeDataProvider;
