import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ThemesButton from '../../components/ThemesButton';
import {ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';

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
          <ThemesButton theme="Vulnerability" style={styles.themeButton} />
          <ThemesButton
            theme="Love & Relationships"
            style={styles.themeButton}
          />
          <ThemesButton theme="Trauma" style={styles.themeButton} />
          <ThemesButton theme="Mental Health" style={styles.themeButton} />
          <ThemesButton theme="Abuse" style={styles.themeButton} />
          <ThemesButton theme="Miscellaneous" style={styles.themeButton} />
          <ThemesButton theme="Pain" style={styles.themeButton} />
          <ThemesButton theme="Growth" style={styles.themeButton} />
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
