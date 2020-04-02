import React, {useState} from 'react';
import LoginForm from './LoginForm';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import ApolloClient from 'apollo-boost';
import PropTypes from 'prop-types';

const client = new ApolloClient({uri: 'http://localhost:8383/'});
const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        name
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
      variables={{email: email, password: password}}>
      {(login, {data, error}) => (
        <LoginForm
          data={data}
          error={error}
          navigation={navigation}
          setEmail={setEmail}
          login={login}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          route={props.route}
        />
      )}
    </Mutation>
  );
};

LoginFormMutation.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default LoginFormMutation;
