import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import VideoCard from '../VideoCard';
import {YoutubeDataContext} from '../../context/YoutubeData';

class VideoList extends Component {
  render() {
    console.log(this.props);
    const {route, navigation, horizontal, offset, faveIds} = this.props;
    if (route.name === 'Newest') {
      console.log('newest');
    }
    if (route.name === 'Most Viewed') {
      console.log('most viewed');
    }
    return (
      <YoutubeDataContext.Consumer>
        {value => (
          <View style={styles.container}>
            <ScrollView horizontal={horizontal} contentOffset={{x: offset}}>
              {route.name === 'Most Viewed'
                ? value.sortedVideos.map(item => {
                    <VideoCard
                      key={item.etag}
                      route={route}
                      navigation={navigation}
                      id={item.items[0].id}
                      faveIds={faveIds}
                      video={item.items[0]}
                    />;
                  })
                : value.videos.map(item => {
                    return route.name === 'Faves' ? (
                      faveIds.includes(item.items[0].id) && (
                        <VideoCard
                          key={item.etag}
                          route={route}
                          navigation={navigation}
                          id={item.items[0].id}
                          faveIds={faveIds}
                          video={item.items[0]}
                        />
                      )
                    ) : (
                      <VideoCard
                        video={item.items[0]}
                        key={item.etag}
                        route={route}
                        navigation={navigation}
                        id={item.items[0].id}
                        faveIds={faveIds}
                        addMostViewedData={this.addMostViewedData}
                      />
                    );
                  })}
            </ScrollView>
          </View>
        )}
      </YoutubeDataContext.Consumer>
    );
  }
}

export default VideoList;
