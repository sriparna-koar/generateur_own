
import React, { useState } from 'react';

const InnerLayout = ({ flipCard, recipientName, senderName, handleRecipientChange, handleSenderChange }) => {
  return (
    <div className="inner-layout" onClick={flipCard}>
      <h2>Happy Birthday, {recipientName}!</h2>
      <p>Wishing you a fantastic day filled with joy and happiness!</p>
      <p>From: {senderName}</p>
    </div>
  );
};

export default InnerLayout;
