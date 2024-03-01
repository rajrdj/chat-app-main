import React, { useState } from 'react';

const MessageInput = ({ handleSendMessage }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!message.trim()) return;
    handleSendMessage(message);
    setMessage('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
