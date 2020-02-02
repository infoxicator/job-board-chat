import React, { useState } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/react-hooks';
import { messagesQuery, addMessageMutation, messageAddedSubscription } from '../graphql/queries';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const Chat = ({ user }) => {
  const [messageList, setMessages] = useState([]);
  const { loading, error } = useQuery(messagesQuery, {
    onCompleted: ({ messages }) => setMessages(messages),
  });

  useSubscription(messageAddedSubscription, {
    onSubscriptionData: ({ subscriptionData }) => {
      setMessages(messageList.concat(subscriptionData.data.messageAdded));
    },
  });

  const [addMessage] = useMutation(addMessageMutation);

  const handleSend = async (text) => {
    await addMessage({ variables: { input: { text } } });
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Ooops Something went wrong...</div>;

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
            Chatting as
          {' '}
          {user}
        </h1>
        <MessageList user={user} messages={messageList} />
        <MessageInput onSend={handleSend} />
      </div>
    </section>
  );
};

export default Chat;
