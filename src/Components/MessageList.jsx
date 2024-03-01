import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map(message => (
        <div key={message.id} className={`message ${message.sentByUser ? 'sent-by-user' : 'received'}`}>
          <div className="message-text">{message.text}</div>
          <div className="message-timestamp">{message.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;

