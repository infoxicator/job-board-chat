import React from 'react';
import { Route } from '@americanexpress/one-app-router';
import csp from '../csp';
import Chat from './Chat';

const JobBoardChat = () => (
  <div>
    <Chat user="Ruben" />
  </div>
);

// Read about childRoutes: https://github.com/americanexpress/one-app#routing
JobBoardChat.childRoutes = () => ([
  <Route path="/" />,
]);

// Read about appConfig: https://github.com/americanexpress/one-app#appconfig
if (!global.BROWSER) {
  JobBoardChat.appConfig = {
    csp,
  };
}

export default JobBoardChat;
