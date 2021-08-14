import React, { useState, useEffect } from 'react';
import '../Common/common.css';

function Typer(props) {
  const [content, setContent] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const speed: number = props.speed || 80;

  useEffect(() => {
    var tout;
    if (index < props.message.length && props.load) {
      tout = setTimeout(() => {
        setContent(content + props.message[index]);
        setIndex(index + 1);
      }, speed);
    }
    if (index >= props.message.length && props.load) {
      props.callback();
    }
    if (props.skip) {
      clearTimeout(tout);
      setContent(props.message);
    }
    console.log('renders');
  }, [index, props.load, props.skip]);

  return (
    <props.type className={props.class} href={props.href ? props.href : null}>
      {content}
    </props.type>
  );
}

export default Typer;
