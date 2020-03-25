import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const SignUpForm = ({
  fullName,
  setFullName,
  data,
  error,
  navigation,
  signup,
  password,
  firstName,
  lastName,
  setPassword,
  setFirst_name,
  setLast_name,
  email,
  setEmail,
  route,
}) => {
  const createFullName = () => {
    return;
  };
  const handleSignUp = () => {
    createFullName();
    signup();
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
              handleSignUp();
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
              handleSignUp();
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
              handleSignUp();
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
              handleSignUp();
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
              handleSignUp();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpForm;
