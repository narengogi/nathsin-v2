import React from 'react';
import '../Common/common.css';

function Letters() {
  return (
    <div className='centeredContainer'>
      <div style={{ fontSize: '24px', color: 'var(--brightCyan)', paddingTop: '2rem' }}>Send me a Post!</div>
      <div style={{ padding: '2rem 0' }}>"The world is full of paper. Write to me.” - Agha Shahid Ali</div>
      <div style={{ fontSize: '12px', color: 'var(--yellow)' }}>#240, Sapthagiri Colony, Kukatpally, Hyderabad - 500072</div>
    </div>
  );
}

export default Letters;
