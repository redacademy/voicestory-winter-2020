import React, {createContext, Component} from 'react';
export const YoutubeDataContext = createContext();
import {key} from '../../apiKeys';
class YoutubeDataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      sortedVideos: [],
      videos: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=UCNaiQ7SzX7OQGxi2Kcho_aQ&part=snippet,id&order=date&maxResults=3`,
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({data, loading: false});

        this.state.data.items.map(video => {
          fetch(
            `https://www.googleapis.com/youtube/v3/videos?id=${video.id.videoId}&key=${key}&part=snippet,contentDetails,statistics`,
          )
            .then(resp => resp.json())
            .then(data => {
              this.setState({videos: [...this.state.videos, data]});
              this.setState({sortedVideos: [...this.state.videos]});
              this.state.sortedVideos.sort(
                (a, b) =>
                  b.items[0].statistics.viewCount -
                  a.items[0].statistics.viewCount,
              );
            })
            .catch(e => {
              this.setState({loading: false, error: true});
              throw new Error(e);
            });
        });
      })
      .catch(e => {
        this.setState({loading: false, error: true});
        throw new Error(e);
      });
  }

  render() {
    console.log(this.state);
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
