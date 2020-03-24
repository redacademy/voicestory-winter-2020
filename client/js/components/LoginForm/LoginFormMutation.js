import React, {useState} from 'react';
import LoginForm from './LoginForm';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({uri: 'http://localhost:8383/'});
const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

const LoginFormMutation = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Mutation
      mutation={LOGIN}
      client={client}
      variables={{username: 'USERNAME', password: 'PASSWORD'}}>
      {(login, {data}) =>
        console.log(data) || (
          <LoginForm
            navigation={navigation}
            setEmail={setEmail}
            login={login}
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            route={props.route}
          />
        )
      }
    </Mutation>
  );
};

export default LoginFormMutation;
