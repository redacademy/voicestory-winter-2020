import React from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

const LoginForm = props => {
  const {navigation} = props;
  return (
    <>
      <View style={styles.form}>
        <View style={styles.formcontent}>
          <Input
            inputContainerStyle={styles.textinput}
            inputStyle={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
          />
          <Input
            inputContainerStyle={styles.textinput}
            inputStyle={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.buttonbox}>
          <Button
            buttonStyle={
              props.route.name == 'Main' ? styles.button : styles.buttonLogin
            }
            titleStyle={styles.title}
            title="Login"
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
