import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ThemesButton from '../../components/ThemesButton';
import {ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import VideoCard from '../../components/VideoCard';

const Explore = ({navigation}) => {
  return (
    <View style={styles.exploreContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Videos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <VideoCard />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Themes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.themeContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ThemesButton
            theme="Vulnerability"
            style={styles.themeButton}
            source={require('../../assets/icons/vulnerability.png')}
          />
          <ThemesButton
            theme="Love & Relationships"
            style={styles.themeButton}
            source={require('../../assets/icons/heart.png')}
          />
          <ThemesButton
            theme="Trauma"
            style={styles.themeButton}
            source={require('../../assets/icons/trauma.png')}
          />
          <ThemesButton
            theme="Mental Health"
            style={styles.themeButton}
            source={require('../../assets/icons/mentalhealth.png')}
          />
          <ThemesButton
            theme="Abuse"
            style={styles.themeButton}
            source={require('../../assets/icons/abuse.png')}
          />
          <ThemesButton
            theme="Miscellaneous"
            style={styles.themeButton}
            source={require('../../assets/icons/misc.png')}
          />
          <ThemesButton
            theme="Pain"
            style={styles.themeButton}
            source={require('../../assets/icons/pain.png')}
          />
          <ThemesButton
            theme="Growth"
            style={styles.themeButton}
            source={require('../../assets/icons/growth.png')}
          />
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
