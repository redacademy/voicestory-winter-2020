import React, {useEffect} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const LoginForm = props => {
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
    if (data) console.log('useEffect', data);
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

export default LoginForm;
