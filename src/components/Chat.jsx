import React, { useState } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([{ id: '1', from: 'System', text: 'Welcome to The chat' }]);

  const handleSend = (text) => {
    const message = { id: Math.random(), from: 'User', text };
    setMessages(messages.concat(message));
  };
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
            Chatting as
          {' '}
          {user}
        </h1>
        <MessageList user={user} messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>
    </section>
  );
};

export default Chat;
