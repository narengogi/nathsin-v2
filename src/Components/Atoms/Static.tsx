import React, { useState, useEffect } from 'react';
import '../Common/common.css';

type StaticProps = {
  message: string;
  type: keyof JSX.IntrinsicElements;
  class?: string;
  load: boolean;
  skip?: boolean;
};

function Static(props: StaticProps) {
  const [content, setContent] = useState<string>('');
  const Tag = props.type;

  useEffect(() => {
    if (props.load) {
      setContent(props.message);
    }
  }, [props.load, props.message]);

  return <Tag className={props.class}>{content}</Tag>;
}

export default Static;
