import React from 'react';
import '../Common/common.css';

function Footer() {
  return (
    <div className='footer'>
      <div style={{ justifySelf: 'flex-start' }}>
        <a className='href' href='https://github.com/nathsin/nathsin-v2'>
          &#64; NNG '{new Date().getFullYear().toString().slice(2)}
        </a>
      </div>
    </div>
  );
}

export default Footer;
