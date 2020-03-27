import React, {Component, useState} from 'react';
import {Modal, View, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchBar} from 'react-native-elements';

const Search = ({events, videos, speakers, navigation}) => {
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search.toLowerCase());
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
    speaker.name.toLowerCase().match(search),
  );
  const speakerName = speakerResults.map(speaker => speaker.name);
  console.log(speakerResults.length);
  return (
    <>
      <SafeAreaView style={styles.headerContainer}>
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
            width: '90%',
            transform: [{translateX: 25}, {translateY: 15}],
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={styles.close} name="close" size={25} color="#FBF7EF" />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.resultheader}>Search Results</Text>
        {search === '' ? null : (
          <View style={styles.border}>
            <Text style={styles.heading}>Events</Text>
          </View>
        )}
        <Text>{search === '' ? null : eventTitle}</Text>
        {search === '' ? null : (
          <View style={styles.border}>
            <Text style={styles.heading}>Videos</Text>
          </View>
        )}
        <Text>{search === '' ? null : videoTitle}</Text>

        {search === '' ? null : (
          <View style={styles.border}>
            <Text style={styles.heading}>Speakers</Text>
          </View>
        )}
        <Text>{search === '' ? null : speakerName}</Text>
      </ScrollView>
    </>
  );
};

export default Search;
