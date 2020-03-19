import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const SignUpForm = () => {
  return (
    <>
      <View style={styles.form}>
        <View style={styles.formcontent}>
          <TextInput
            style={styles.textinput}
            placeholder="First Name"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.textinput}
            placeholder="Last Name"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.textinput}
            inputStyle={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.textinput}
            inputStyle={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.buttonbox}>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.title}
            title="Sign Up"
          />
        </View>
      </View>
    </>
  );
};

export default SignUpForm;
