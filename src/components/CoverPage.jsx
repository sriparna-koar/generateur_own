// import React from 'react';

// const CoverPage = ({ flipCard }) => {
//   return (
//     <div className="cover-page" onClick={flipCard}>
//       <h1>Click to Open</h1>
//     </div>
//   );
// };

// export default CoverPage;
import React, { useState } from 'react';

const CoverPage = ({ flipCard }) => {
  const [showCoverPage, setShowCoverPage] = useState(true);

  const revealInputFields = () => {
    setShowCoverPage(false);
    flipCard();
  };

  return (
    <div className={showCoverPage ? 'cover-page' : 'hidden'} onClick={revealInputFields}>
      <h1>Click to Open</h1>
    </div>
  );
};

export default CoverPage;
