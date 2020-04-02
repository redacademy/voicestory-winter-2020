import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import {View} from 'react-native';
import SignUpForm from '../../components/SignUpForm';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';

const Login = ({route, navigation}) => {
  const [formToggle, setFormToggle] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => {
            setFormToggle(true);
          }}
          style={formToggle && styles.borderBottom}>
          <Text style={formToggle ? styles.underline : styles.formToggle}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFormToggle(false);
          }}
          style={!formToggle && styles.borderBottom}>
          <Text style={!formToggle ? styles.underline : styles.formToggle}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {formToggle ? (
        <SignUpForm navigation={navigation} route={route} />
      ) : (
        <LoginForm navigation={navigation} route={route} />
      )}
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default Login;
