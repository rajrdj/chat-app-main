// LeftSidebar.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const LeftSidebar = ({ conversations }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredConversations = conversations.filter((conversation) =>
    conversation.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="left-sidebar">
      <SearchBar handleSearch={handleSearch} />
      <div className="conversation-list">
        {filteredConversations.map((conversation) => (
          <div key={conversation.id}>{conversation.contact}</div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
