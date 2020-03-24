import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const formSubmit = () => {
    console.log(
      'First:',
      first_name,
      'Last: ',
      last_name,
      'Email: ',
      email,
      'Password',
      password,
    );
  };
  return (
    <>
      <KeyboardAvoidingView style={styles.form} behavior="position">
        <View style={styles.formcontent}>
          <TextInput
            style={styles.textinput}
            placeholder="First Name"
            placeholderTextColor="white"
            onSubmitEditing={() => {
              formSubmit();
            }}
            onChangeText={value => {
              setFirst_name(value);
            }}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Last Name"
            placeholderTextColor="white"
            onSubmitEditing={() => {
              formSubmit();
            }}
            onChangeText={value => {
              setLast_name(value);
            }}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Email"
            placeholderTextColor="white"
            onSubmitEditing={() => {
              formSubmit();
            }}
            onChangeText={value => {
              setEmail(value);
            }}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="white"
            onSubmitEditing={() => {
              formSubmit();
            }}
            onChangeText={value => {
              setPassword(value);
            }}
          />
        </View>
        <View style={styles.buttonbox}>
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.title}
            title="Sign Up"
            onPress={() => {
              formSubmit();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpForm;
