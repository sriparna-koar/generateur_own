
import React, { useState } from 'react';

import './BirthdayCard.css';

const BirthdayCard = () => {
  const [recipient, setRecipient] = useState('');
  const [senderName, setSenderName] = useState('');
  const [messages, setMessages] = useState([
    "Wishing you a fantastic day filled with joy and happiness!",
    "May your birthday be as special as you are!",
    "Sending you smiles for every moment of your special day!"
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCoverPage, setShowCoverPage] = useState(true);
  const [showBirthdayCard, setShowBirthdayCard] = useState(false);

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleNameChange = (event) => {
    setSenderName(event.target.value);
  };

  const revealInputFields = () => {
    setShowCoverPage(false);
  };

  const changeMessage = () => {
    const nextIndex = (currentMessageIndex + 1) % messages.length;
    setCurrentMessageIndex(nextIndex);

    if (recipient && senderName) {
      setShowBirthdayCard(true);
    }
  };

  const resetCard = () => {
    setShowBirthdayCard(false);
    setShowCoverPage(true);
    setRecipient('');
    setSenderName('');
  };

  if (showBirthdayCard) {
    return (
      <div className="birthday-card" onClick={resetCard}>
        <h2>Happy Birthday, {recipient}!</h2>
        <div className="card-body">
          <img src="data:image/jpeg;base64,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" alt="Birthday Cake" />
          <p>{messages[currentMessageIndex]}</p>
          <p>Have a fantastic day ahead!</p>
        </div>
        <div className="card-footer">
          <p>Best wishes,</p>
          <p className="sender-name">{senderName}</p>
        </div>
      </div>
    );
  }

  if (showCoverPage) {
    return (
      <div className="cover-page" onClick={revealInputFields}>
        <img src="https://www.doughandcream.com/wp-content/uploads/2023/04/Baby-Girl-Birthday-Cake.jpeg" alt="Birthday Cake" />
        <h2>Click here for Birthday Card</h2>
      </div>
    );
  }

  return (
    <div className="birthday-card" onClick={changeMessage}>
      <h2>Happy Birthday, {recipient || 'Recipient'}!</h2>
      <div className="card-body">
        <img src="data:image/jpeg;base64,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" alt="Birthday Cake" />
        <p>{messages[currentMessageIndex]}</p>
        <p>Wishing you a day filled with joy and laughter!</p>
      </div>
      <div className="card-footer">
        <p>Best wishes,</p>
        <input
          type="text"
          placeholder="Recipient's Name"
          value={recipient}
          onChange={handleRecipientChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Your Name"
          value={senderName}
          onChange={handleNameChange}
          className="input-field"
        />
        <p className="sender-name">{senderName}</p>
      </div>
    </div>
  );
};

export default BirthdayCard;