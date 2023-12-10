// Inner layout component (inside the card)
// const InnerLayout = () => {
//     return (
//       <div className="inner-layout">
//         <h2>Dear Friend,</h2>
//         <p>Wishing you a fantastic birthday filled with joy and happiness!</p>
//       </div>
//     );
//   };
  
  // Main card component
//   const BirthdayCard = () => {
//     const [isOpened, setIsOpened] = useState(false);
  
//     const openCard = () => {
//       setIsOpened(true);
//     };
  
//     return (
//       <div className="birthday-card">
//         {!isOpened ? (
//           <CoverPage openCard={openCard} />
//         ) : (
//           <InnerLayout />
//         )}
//       </div>
//     );
//   };
  
//   export default BirthdayCard;
// import React from 'react';

// const InnerLayout = ({ flipCard }) => {
//   return (
//     <div className="inner-layout" onClick={flipCard}>
//       <h2>Happy Birthday!</h2>
//       <p>Wishing you a fantastic day filled with joy and happiness!</p>
//     </div>
//   );
// };

// export default InnerLayout;
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
