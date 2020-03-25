import React, {useState} from 'react';
import SignUpForm from './SignUpForm';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({uri: 'http://localhost:8383/'});
const SIGNUP = gql`
  # Write your query or mutation here
  mutation register($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;

const SignUpFormMutation = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  return (
    <Mutation
      mutation={SIGNUP}
      client={client}
      variables={{email: email, password: password, name: fullName}}>
      {(signup, {data, error}) => (
        <SignUpForm
          fullName={fullName}
          setFullName={setFullName}
          data={data}
          error={error}
          navigation={navigation}
          signup={signup}
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
