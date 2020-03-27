import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchBar} from 'react-native-elements';

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

  //videos
  const videoResults = videos.filter(video =>
    video.title.toLowerCase().match(search),
  );
  const videoTitle = videoResults.map(video => video.title);

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <Text style={styles.resultheader}>Search Results</Text>
        {eventTitle.length > 0 ? (
          <View style={styles.border}>
            <Text style={styles.heading}>Events</Text>
          </View>
        ) : null}
        {search === ''
          ? null
          : eventResults.map(event => (
              <TouchableOpacity>
                <View key={event.id} style={styles.resultsContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      resizeMode={'cover'}
                      source={{uri: event.thumbnail_url}}
                    />
                  </View>
                  <Text style={styles.title}>{event.title}</Text>
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
              <TouchableOpacity>
                <View key={video.id} style={styles.resultsContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      resizeMode={'cover'}
                      source={{
                        uri: 'https://i.ytimg.com/vi/IC6m249zvI0/hqdefault.jpg',
                      }}
                    />
                  </View>
                  <Text style={styles.title}>{video.title}</Text>
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
              <TouchableOpacity>
                <View key={speaker.id} style={styles.resultsContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      resizeMode={'cover'}
                      source={{uri: speaker.profile_picture}}
                    />
                  </View>
                  <Text style={styles.title}>{speaker.owner.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
      </ScrollView>
    </View>
  );
};

export default Search;
