import React from 'react';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //   const {signIn} = React.useContext(AuthContext);

  return (
    <View>
      <TextInput placeholder="email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={() => signIn({email, password})} />
    </View>
  );
};

export default LoginForm;
