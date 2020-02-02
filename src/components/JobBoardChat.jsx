import React from 'react';
import { Route } from '@americanexpress/one-app-router';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../graphql/client';
import Chat from './Chat';

const JobBoardChat = () => (
  <ApolloProvider client={client}>
    <Chat user="Ruben" />
  </ApolloProvider>
);

// Read about childRoutes: https://github.com/americanexpress/one-app#routing
JobBoardChat.childRoutes = () => ([
  <Route path="/" />,
]);

export default JobBoardChat;
