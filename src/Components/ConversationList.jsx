import React from 'react';

const ConversationList = ({ conversations, handleSelectConversation }) => {
  return (
    <div className="conversation-list">
      {conversations.map(conversation => (
        <div key={conversation.id} onClick={() => handleSelectConversation(conversation)} className="conversation">
          <div className="contact-name">{conversation.contactName}</div>
          <div className="last-message">{conversation.lastMessage}</div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
