import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ThemesButton from '../../components/ThemesButton';
import {ScrollView} from 'react-native-gesture-handler';

const Explore = ({navigation}) => {
  return (
    <View style={styles.exploreContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Videos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Themes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.themeContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ThemesButton theme="Vulnerability" />
          <ThemesButton theme="Love & Relationships" />
          <ThemesButton theme="Trauma" />
          <ThemesButton theme="Mental Health" />
          <ThemesButton theme="Abuse" />
          <ThemesButton theme="Miscellaneous" />
          <ThemesButton theme="Pain" />
          <ThemesButton theme="Growth" />
        </ScrollView>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Speakers</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Speakers')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Explore;
