import React, { useState } from 'react';
import dummyData from './data/dummyData.json';
import ConversationList from './components/ConversationList';

import './App.css';

const App = () => {
  const [conversations, setConversations] = useState(dummyData);
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = (message) => {
    const updatedConversation = {
      ...selectedConversation,
      messages: [
        ...selectedConversation.messages,
        {
          id: selectedConversation.messages.length + 1,
          text: message,
          sentByUser: true, // Assuming the user sending the message is the current user
          timestamp: new Date().toLocaleString() // Adding timestamp for the message
        }
      ]
    };
    setSelectedConversation(updatedConversation);
  };

  return (
    <div className="app">
      <ConversationList
        conversations={conversations}
        handleSelectConversation={handleSelectConversation}
      />
      <div className="right-side-view">
        
      </div>
    </div>
  );
};

export default App;
