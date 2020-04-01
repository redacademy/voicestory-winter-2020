import React, {useEffect, useContext} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import Text from '../../components/CustomText';
import {Button} from 'react-native-elements';
import styles from './styles';
import {UserContext} from '../../context/UserContext';
import PropTypes from 'prop-types';

const LoginForm = props => {
  const {setUser} = useContext(UserContext);
  const {
    data,
    error,
    navigation,
    setEmail,
    login,
    password,
    setPassword,
    email,
  } = props;
  useEffect(() => {
    if (data) {
      setUser(data.login.user);
      navigation.navigate('Main');
    }
  }, [data]);
  return (
    <KeyboardAvoidingView style={styles.form} behavior="position">
      <View style={styles.formcontent}>
        <TextInput
          style={styles.textinput}
          value={email}
          placeholder="Email"
          placeholderTextColor="white"
          onSubmitEditing={() => {
            login();
          }}
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          style={styles.textinput}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          textContentType="password"
          onSubmitEditing={() => {
            login();
          }}
          onChangeText={value => {
            setPassword(value);
          }}
        />
      </View>
      <Text style={styles.error}>
        {error && 'Invalid Login. Check your username and password.'}
      </Text>
      <View style={styles.buttonbox}>
        <Button
          buttonStyle={
            props.route.name == 'Login' ? styles.button : styles.buttonLogin
          }
          titleStyle={styles.title}
          title="Login"
          onPress={() => {
            login();
          }}
        />
        {props.route.name == 'Login' && (
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.title}
            title="Sign Up"
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  data: PropTypes.object,
  error: PropTypes.object,
  setEmail: PropTypes.func,
  login: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  email: PropTypes.string,
};

export default LoginForm;
