import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import {SearchBar} from 'react-native-elements';
import PropTypes from 'prop-types';

const Search = ({events, videos, speakers, navigation}) => {
  const [search, setSearch] = useState(null);
  const updateSearch = search => {
    search === '' ? setSearch(null) : setSearch(search.toLowerCase());
  };

  //events
  const eventResults = events.filter(event =>
    event.title.toLowerCase().match(search),
  );
  const eventTitle = eventResults.map(event => event.title);

  // //videos
  const videoResults = videos.filter(video =>
    video[0].snippet.title.toLowerCase().match(search),
  );

  const videoTitle = videoResults.map(video => video[0].snippet.title);

  //speakers
  const speakerResults = speakers.filter(speaker =>
    speaker.owner.name.toLowerCase().match(search),
  );
  const speakerName = speakerResults.map(speaker => speaker.owner.name);

  return (
    <View style={styles.searchContainer}>
      <View style={styles.headerContainer}>
        <SearchBar
          placeholder="Search..."
          onChangeText={value => updateSearch(value)}
          value={search}
          autoCorrect={false}
          autoCompleteType="name"
          searchIcon={null}
          clearIcon={{
            color: '#FBF7EF',
          }}
          containerStyle={{
            backgroundColor: '#DB4F48',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
            margin: 0,
            borderRadius: 10,
            width: '100%',
            transform: [{translateX: 20}, {translateY: 10}],
          }}
          inputContainerStyle={{
            backgroundColor: '#9F3833',
            borderRadius: 10,
            width: '90%',
            margin: 0,
          }}
          inputStyle={{
            fontFamily: 'Lato-Regular',
            color: '#FBF7EF',
            fontSize: 15,
          }}
          placeholderTextColor="#FBF7EF"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.resultheader}>Search Results</Text>
          {eventTitle.length > 0 ? (
            <View style={styles.border}>
              <Text style={styles.heading}>Events</Text>
            </View>
          ) : null}
          {search === ''
            ? null
            : eventResults.map(event => (
                <TouchableOpacity
                  key={event.id}
                  onPress={() =>
                    navigation.navigate('Event Info', {
                      event: event,
                    })
                  }>
                  <View style={styles.resultsContainer}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        resizeMode={'cover'}
                        source={{
                          uri: event.thumbnail_url
                            ? event.thumbnail_url
                            : 'http://www.voicestory.ca/wp-content/uploads/2018/09/VoicSetory-Icon-1-1.png',
                        }}
                      />
                    </View>
                    <View style={styles.titleContainer}>
                      <Text key={event.id} style={styles.title}>
                        {event.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          {videoTitle.length > 0 ? (
            <View style={styles.border}>
              <Text style={styles.heading}>Videos</Text>
            </View>
          ) : null}
          {search === ''
            ? null
            : videoResults.map(video => (
                <TouchableOpacity
                  key={video[0].id}
                  onPress={() =>
                    navigation.navigate('Video', {video: video[0]})
                  }>
                  <View style={styles.resultsContainer}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        resizeMode={'cover'}
                        source={{
                          uri: video[0].snippet.thumbnails.standard.url
                            ? video[0].snippet.thumbnails.standard.url
                            : 'https://i.ytimg.com/vi/IC6m249zvI0/hqdefault.jpg',
                        }}
                      />
                    </View>
                    <View style={styles.titleContainer}>
                      <Text key={video.id} style={styles.title}>
                        {video[0].snippet.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          {speakerName.length > 0 ? (
            <View style={styles.border}>
              <Text style={styles.heading}>Speakers</Text>
            </View>
          ) : null}
          {search === ''
            ? null
            : speakerResults.map(speaker => (
                <TouchableOpacity
                  key={speaker.id}
                  onPress={() =>
                    navigation.navigate('Speaker Profile', {
                      speaker: speaker,
                    })
                  }>
                  <View style={styles.resultsContainer}>
                    <View style={styles.imageContainer}>
                      <Image
                        style={styles.image}
                        resizeMode={'cover'}
                        source={{
                          uri: speaker.profile_picture
                            ? speaker.profile_picture
                            : 'http://www.voicestory.ca/wp-content/uploads/2018/09/VoicSetory-Icon-1-1.png',
                        }}
                      />
                    </View>
                    <View style={styles.titleContainer}>
                      <Text key={speaker.id} style={styles.title}>
                        {speaker.owner.name}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
        </View>
      </ScrollView>
    </View>
  );
};
Search.propTypes = {
  navigation: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  speakers: PropTypes.array.isRequired,
  videos: PropTypes.array.isRequired,
};
export default Search;
