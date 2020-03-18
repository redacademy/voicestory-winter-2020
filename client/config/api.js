import ApolloClient from 'apollo-boost';

// or you can use `import gql from 'graphql-tag';` instead

const client = new ApolloClient({
  uri:
    'https://us1.prisma.sh/ivandaixivwork/voicestory-2020/voicestory-2020-dev',
});

export default client;
