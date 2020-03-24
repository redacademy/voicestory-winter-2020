import React from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './styles';
import ThemesButton from '../../components/ThemesButton';

const Themes = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.themeContainer}>
          <View style={styles.row}>
            <ThemesButton
              theme="Vulnerability"
              style={styles.themeButton}
              source={require('../../assets/icons/vulnerability.png')}
              iconDimension={65}
            />
            <ThemesButton
              theme="Love & Relationships"
              style={styles.themeButton}
              source={require('../../assets/icons/heart.png')}
              iconDimension={65}
            />
          </View>
          <View style={styles.row}>
            <ThemesButton
              theme="Trauma"
              style={styles.themeButton}
              source={require('../../assets/icons/trauma.png')}
              iconDimension={65}
            />
            <ThemesButton
              theme="Mental Health"
              style={styles.themeButton}
              source={require('../../assets/icons/mentalhealth.png')}
              iconDimension={65}
            />
          </View>
          <View style={styles.row}>
            <ThemesButton
              theme="Abuse"
              style={styles.themeButton}
              source={require('../../assets/icons/abuse.png')}
              iconDimension={65}
            />
            <ThemesButton
              theme="Miscellaneous"
              style={styles.themeButton}
              source={require('../../assets/icons/misc.png')}
              iconDimension={65}
            />
          </View>
          <View style={styles.row}>
            <ThemesButton
              theme="Pain"
              style={styles.themeButton}
              source={require('../../assets/icons/pain.png')}
              iconDimension={65}
            />
            <ThemesButton
              theme="Growth"
              style={styles.themeButton}
              source={require('../../assets/icons/growth.png')}
              iconDimension={65}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Themes;
