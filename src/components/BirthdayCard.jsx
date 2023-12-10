
// import React, { useState } from 'react';
// import './BirthdayCard.css';

// const BirthdayCard = () => {
//   const [recipient, setRecipient] = useState('');
//   const [senderName, setSenderName] = useState('');
//   const [messages, setMessages] = useState([
//     "Wishing you a fantastic day filled with joy and happiness!",
//     "May your birthday be as special as you are!",
//     "Sending you smiles for every moment of your special day!"
//   ]);
//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
//   const [showCoverPage, setShowCoverPage] = useState(true);
//   const [showBirthdayCard, setShowBirthdayCard] = useState(false);

//   const handleRecipientChange = (event) => {
//     setRecipient(event.target.value);
//   };

//   const handleNameChange = (event) => {
//     setSenderName(event.target.value);
//   };

//   const revealInputFields = () => {
//     setShowCoverPage(false);
//   };

//   const changeMessage = () => {
//     const nextIndex = (currentMessageIndex + 1) % messages.length;
//     setCurrentMessageIndex(nextIndex);

//     if (recipient && senderName) {
//       setShowBirthdayCard(true);
//     }
//   };

//   const resetCard = () => {
//     setShowBirthdayCard(false);
//     setShowCoverPage(true);
//     setRecipient('');
//     setSenderName('');
//   };

//   if (showBirthdayCard) {
//     return (
//       <div className="birthday-card" onClick={resetCard}>
//         <h2>Happy Birthday, {recipient}!</h2>
//         <div className="card-body">
//           <img src="cake.jpeg" alt="Birthday Cake" />
//           <p>{messages[currentMessageIndex]}</p>
//         </div>
//         <div className="card-footer">
//           <p>Best wishes,</p>
//           <p className="sender-name">{senderName}</p>
//         </div>
//       </div>
//     );
//   }

//   if (showCoverPage) {
//     return (
//       <div className="cover-page" onClick={revealInputFields}>
//         <img src="birthday.jpeg" alt="Birthday Cake" />
//         <h2>Click here for Birthday Card</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="birthday-card" onClick={changeMessage}>
//       <h2>Happy Birthday, {recipient || 'Recipient'}!</h2>
//       <div className="card-body">
//         <img src="cake.jpeg" alt="Birthday Cake" />
//         <p>{messages[currentMessageIndex]}</p>
//       </div>
//       <div className="card-footer">
//         <p>Best wishes,</p>
//         <input
//           type="text"
//           placeholder="Recipient's Name"
//           value={recipient}
//           onChange={handleRecipientChange}
//           className="input-field"
//         />
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={senderName}
//           onChange={handleNameChange}
//           className="input-field"
//         />
//         <p className="sender-name">{senderName}</p>
//       </div>
//     </div>
//   );
// };

// export default BirthdayCard;
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
          <img src="cake.jpeg" alt="Birthday Cake" />
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
        <img src="birthday.jpeg" alt="Birthday Cake" />
        <h2>Click here for Birthday Card</h2>
      </div>
    );
  }

  return (
    <div className="birthday-card" onClick={changeMessage}>
      <h2>Happy Birthday, {recipient || 'Recipient'}!</h2>
      <div className="card-body">
        <img src="cake.jpeg" alt="Birthday Cake" />
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
