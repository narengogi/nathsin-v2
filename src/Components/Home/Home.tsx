import React, { useEffect, useState } from 'react';
import '../Common/common.css';
import Typer from '../Atoms/Typer';
import Static from '../Atoms/Static';
import { intro } from './text';
import { addCke } from '../../Helpers/CookieHelper.js';

function Home(props) {
  const [curr, setCurr] = useState(0);

  const handleClick = () => {
    setCurr(curr + 1);
  };

  useEffect(() => {
    if (props.skipAll) {
      setCurr(9999);
      addCke('visited', true, 1);
    }
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  });

  function next() {
    setTimeout(() => {
      setCurr(curr + 1);
    }, 600);
  }

  return (
    <div className='textBox'>
      <div>
        <Static message={'prompt~>'} class='prompt' type={'span'} skip={curr > 0} load={curr === 0} />
        <Typer message={`\u0020 Intro!`} class='text' type={'span'} skip={curr > 0} load={curr === 0} callback={() => next()} />
      </div>
      <Typer message={intro} class='text' type={'span'} skip={curr > 1} load={curr === 1} callback={() => next()} />
    </div>
  );
}

export default Home;
