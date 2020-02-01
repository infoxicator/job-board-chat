/* eslint-disable no-param-reassign */
import React from 'react';

const MessageInput = ({ onSend }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSend(event.target.value);
      event.target.value = '';
    }
  };
  return (
    <div className="box">
      <p className="control">
        <input
          className="input"
          type="text"
          placeholder="Say something..."
          onKeyPress={handleKeyPress}
        />
      </p>
    </div>
  );
};

export default MessageInput;
