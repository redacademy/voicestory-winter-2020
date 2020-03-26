import React, {Component} from 'react';
import {Modal, View, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Searchbar from '../../components/SearchBar';

const Search = ({navigation}) => {
  let search = React.createRef();
  return (
    <>
      <SafeAreaView style={styles.headerContainer}>
        <Searchbar ref={search} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={styles.close} name="close" size={25} color="#FBF7EF" />
        </TouchableOpacity>
        {console.log(search)}
      </SafeAreaView>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.resultheader}>Search Results</Text>
        <View style={styles.border}>
          <Text style={styles.heading}>Events</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.heading}>Videos</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.heading}>Speakers</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Search;
