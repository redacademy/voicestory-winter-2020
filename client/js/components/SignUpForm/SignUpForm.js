import React, {useEffect, useContext, useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
import {UserContext} from '../../context/UserContext';
import Text from '../../components/CustomText';
import PropTypes from 'prop-types';

const SignUpForm = ({
  setFullName,
  data,
  error,
  navigation,
  signup,
  firstName,
  lastName,
  setPassword,
  setFirst_name,
  setLast_name,
  setEmail,
  email,
  password,
}) => {
  const [emptyFields, setEmptyFields] = useState(false);
  const {setUser} = useContext(UserContext);
  const createFullName = async () => {
    await setFullName(firstName + ' ' + lastName);
  };
  const handleSignUp = async () => {
    await createFullName();
    if (
      email !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      password !== ''
    ) {
      signup();
    } else {
      setEmptyFields(true);
    }
  };
  useEffect(() => {
    if (data) {
      setUser(data.register);
      navigation.navigate('Main');
    }
  }, [data]);
  return (
    <KeyboardAvoidingView style={styles.form} behavior="position">
      <View style={styles.formcontent}>
        <TextInput
          style={styles.textinput}
          value={firstName}
          autoCorrect={false}
          autoCompleteType="name"
          placeholder="First Name"
          placeholderTextColor="white"
          onSubmitEditing={() => {
            handleSignUp();
          }}
          onChangeText={value => {
            setFirst_name(value);
            setEmptyFields(false);
          }}
        />
        <TextInput
          autoCorrect={false}
          autoCompleteType="name"
          style={styles.textinput}
          value={lastName}
          placeholder="Last Name"
          placeholderTextColor="white"
          onSubmitEditing={() => {
            handleSignUp();
          }}
          onChangeText={value => {
            setLast_name(value);
            setEmptyFields(false);
          }}
        />
        <TextInput
          autoCorrect={false}
          autoCompleteType="email"
          style={styles.textinput}
          value={email}
          placeholder="Email"
          placeholderTextColor="white"
          onSubmitEditing={() => {
            handleSignUp();
          }}
          onChangeText={value => {
            setEmail(value);
            setEmptyFields(false);
          }}
        />
        <TextInput
          autoCorrect={false}
          style={styles.textinput}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="newPassword"
          placeholderTextColor="white"
          onSubmitEditing={() => {
            handleSignUp();
          }}
          onChangeText={value => {
            setPassword(value);
            setEmptyFields(false);
          }}
        />
      </View>
      <Text style={styles.error}>
        {emptyFields && 'Try filling out the fields!'}
        {error &&
          'Invalid Sign Up. Make sure your username/email are unique and fill in all the fields.'}
      </Text>
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
  );
};

SignUpForm.propTypes = {
  setEmail: PropTypes.func,
  setFullName: PropTypes.func,
  data: PropTypes.object,
  error: PropTypes.object,
  navigation: PropTypes.object,
  signup: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  setPassword: PropTypes.func,
  setFirst_name: PropTypes.func,
  setLast_name: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default SignUpForm;
