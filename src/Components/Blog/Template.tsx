import React from 'react';

function Template(props) {
  return (
    <div>
      <div style={{ fontSize: '20px', color: 'var(--brightCyan)', padding: '1rem 0' }}>{props.title}</div>
      <div>{props.content}</div>
    </div>
  );
}

export default Template;
