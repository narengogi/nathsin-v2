import React from 'react';
import '../Common/common.css';

function Footer() {
  return (
    <div className='footer'>
      <div style={{ justifySelf: 'flex-start' }}>
        &#64; NNG '{new Date().getFullYear().toString().slice(2)} --
        <a className='href' href='https://github.com/nathsin'>
          {`\u0020 checkout my projects here`}
        </a>
      </div>
    </div>
  );
}

export default Footer;
