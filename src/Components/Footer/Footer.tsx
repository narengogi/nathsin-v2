import React from 'react';
import { ReactComponent as RssIcon } from '../../assets/images/rss.svg';

import '../Common/common.css';

function Footer() {
  return (
    <div className='footer'>
      <div style={{ justifySelf: 'flex-start' }}>
        <a href='https://naths.in/rss.xml'>
             RSS&nbsp;<RssIcon width='0.8rem' alt='RSS icon' style={{ marginBottom: '-2px' }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
