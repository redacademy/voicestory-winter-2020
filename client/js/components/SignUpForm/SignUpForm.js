import React, {useEffect, useContext} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
import {UserContext} from '../../context/UserContext';
import Text from '../../components/CustomText';

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
  route,
}) => {
  const {setUser} = useContext(UserContext);
  const createFullName = async () => {
    await setFullName(firstName + ' ' + lastName);
  };
  const handleSignUp = async () => {
    await createFullName();
    signup();
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
            value === '' ? (error = true) : setFirst_name(value);
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
            value === '' ? (error = true) : setLast_name(value);
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
            value === '' ? (error = true) : setEmail(value);
          }}
        />
        <TextInput
          autoCorrect={false}
          autoCompleteType="password"
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
            value === '' ? (error = true) : setPassword(value);
          }}
        />
      </View>
      <Text style={styles.error}>
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

export default SignUpForm;
