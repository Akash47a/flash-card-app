import React from 'react';

// Accept 'currentIndex' and 'totalCards' from the parent component
function Progressbar({ currentIndex, totalCards }) {
  
  // Calculate real percentage based on how many cards exist
  // We add 1 to currentIndex because arrays start at 0
  const percent = ((currentIndex ) / totalCards) * 100;
  const str = `${percent}%`;

  return (
    <div className='bar'>
      <div className='divPro'>
        <div style={{ width: str }} className='progress'></div>
      </div>
      <p>Card {currentIndex } of {totalCards}</p>
    </div>
  );
}

export default Progressbar;