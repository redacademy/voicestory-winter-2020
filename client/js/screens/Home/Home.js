import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import {View, Image} from 'react-native';
import styles from './styles';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Image
          source={require('../../assets/icons/voicestory-logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../assets/icons/announcement2x.png')}
          style={styles.mic}
        />
      </View>
      <LoginForm navigation={props.navigation} route={props.route} />
    </View>
  );
};

export default Home;
