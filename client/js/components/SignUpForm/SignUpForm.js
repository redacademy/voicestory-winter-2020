import React from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import style from './styles';

const SignUpForm = () => {
  return (
    <>
      <View style={style.form}>
        <View style={style.formcontent}>
          <Input
            inputContainerStyle={style.textinput}
            inputStyle={style.input}
            placeholder="First Name"
            placeholderTextColor="white"
          />
          <Input
            inputContainerStyle={style.textinput}
            inputStyle={style.input}
            placeholder="Last Name"
            placeholderTextColor="white"
          />
          <Input
            inputContainerStyle={style.textinput}
            inputStyle={style.input}
            placeholder="Email"
            placeholderTextColor="white"
          />
          <Input
            inputContainerStyle={style.textinput}
            inputStyle={style.input}
            placeholder="Password"
            placeholderTextColor="white"
          />
        </View>
        <View style={style.buttonbox}>
          <Button
            buttonStyle={style.button}
            titleStyle={style.title}
            title="Sign Up"
          />
        </View>
      </View>
    </>
  );
};

export default SignUpForm;
