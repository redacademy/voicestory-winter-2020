import React from 'react';

const SignUpForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //   const {signUp} = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        secureTextEntry
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        secureTextEntry
      />
      <TextInput placeholder="email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign Up"
        onPress={() => signUp({firstName, lastName, email, password})}
      />
    </View>
  );
};

export default LoginForm;
