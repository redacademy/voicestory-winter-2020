import React, {useState} from 'react';
import SignUpForm from './SignUpForm';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({uri: 'http://localhost:8383/'});
const SIGNUP = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

const SignUpFormMutation = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <Mutation
      mutation={SIGNUP}
      client={client}
      variables={{email: email, password: password, name: fullName}}>
      {(signup, {data, error}) => (
        <LoginForm
          data={data}
          error={error}
          navigation={navigation}
          login={signup}
          password={password}
          firstName={firstName}
          lastName={lastName}
          setPassword={setPassword}
          setFirst_name={setFirstName}
          setLast_name={setLastName}
          email={email}
          setEmail={setEmail}
          route={props.route}
        />
      )}
    </Mutation>
  );
};

export default SignUpFormMutation;
