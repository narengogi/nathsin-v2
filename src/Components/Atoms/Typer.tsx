import React, { useState, useEffect } from 'react';
import '../Common/common.css';

type TyperProps = {
  message: string;
  type: keyof JSX.IntrinsicElements;
  class?: string;
  href?: string;
  load: boolean;
  skip?: boolean;
  speed?: number;
  callback?: () => void;
};

function Typer(props: TyperProps) {
  const [content, setContent] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const speed: number = props.speed || 80;
  const Tag = props.type as React.ElementType;

  useEffect(() => {
    let tout: ReturnType<typeof setTimeout> | undefined;
    if (index < props.message.length && props.load) {
      tout = setTimeout(() => {
        setContent(content + props.message[index]);
        setIndex(index + 1);
      }, speed);
    }
    if (index >= props.message.length && props.load) {
      props.callback?.();
    }
    if (props.skip) {
      clearTimeout(tout);
      setContent(props.message);
    }
    console.log('renders');
  }, [index, props.load, props.skip]);

  return (
    <Tag className={props.class} href={props.href}>
      {content}
    </Tag>
  );
}

export default Typer;
