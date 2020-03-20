import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import {View, Image} from 'react-native';
import SignUpForm from '../../components/SignUpForm';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';

const Home = props => {
  return (
    <View style={styles.container}>
      <LoginForm navigation={props.navigation} route={props.route} />
    </View>
  );
};

export default Home;
