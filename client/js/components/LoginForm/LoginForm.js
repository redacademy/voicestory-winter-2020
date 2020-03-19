import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const LoginForm = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <View style={styles.form}>
        <View style={styles.formcontent}>
          <TextInput
            inputContainerStyle={styles.textinput}
            inputStyle={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={value => {
              setEmail(value);
            }}
          />
          <TextInput
            inputContainerStyle={styles.textinput}
            inputStyle={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="white"
            textContentType="password"
            onChangeText={value => {
              setPassword(value);
            }}
          />
        </View>
        <View style={styles.buttonbox}>
          <Button
            buttonStyle={
              props.route.name == 'Main' ? styles.button : styles.buttonLogin
            }
            titleStyle={styles.title}
            title="Login"
            onPress={() => {
              console.log('Email:', email, ' Password:', password);
            }}
          />
          {props.route.name == 'Main' && (
            <Button
              buttonStyle={styles.button}
              titleStyle={styles.title}
              title="Sign Up"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default LoginForm;
