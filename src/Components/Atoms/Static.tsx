import React, { useState, useEffect } from 'react';
import '../Common/common.css';

function Static(props) {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (props.load) {
      setContent(props.message);
    }
  }, [props.load, props.message]);

  return <props.type className={props.class}>{content}</props.type>;
}

export default Static;
