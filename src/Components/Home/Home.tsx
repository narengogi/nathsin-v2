import React, { useEffect, useState } from 'react';
import '../Common/common.css';
import Typer from '../Atoms/Typer';
import Static from '../Atoms/Static';
import { welcome, about } from './text';
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
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleClick);
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
      <Typer message={`. . .`} class='text' type={'div'} skip={curr > 1} load={curr === 1} callback={() => next()} speed={500} />
      <Typer message={welcome} class='text' type={'div'} skip={curr > 2} load={curr === 2} callback={() => next()} />
      <Typer message={about} class='textSoft' type={'div'} skip={curr > 3} load={curr === 3} callback={() => next()} />
      <Typer message={`. . .`} class='text' type={'div'} skip={curr > 4} load={curr === 4} callback={() => next()} speed={300} />
      <div>
        <Static message={'prompt~>'} class='prompt' type={'span'} skip={curr > 5} load={curr === 5} />
        <Typer message={`\u0020 More!`} class='text' type={'span'} skip={curr > 5} load={curr === 5} callback={() => next()} />
      </div>
      <div>
        <Typer message={`If you're looking for code, you can checkout my GitHub profile here ---->`} class='text' type={'span'} skip={curr > 6} load={curr === 6} callback={() => next()} />
        <Typer message={`\u0020 GitHub`} class='href' type={'a'} skip={curr > 7} load={curr === 7} callback={() => next()} href='https://github.com/narengogi' />
      </div>
      <Typer message={`Well that's about it I suppose :)`} class='textSoft' type={'div'} skip={curr > 8} load={curr === 8} callback={() => next()} />
      <div>
        <Typer message={`I can be reached at ---->`} class='text' type={'span'} skip={curr > 9} load={curr === 9} callback={() => next()} />
        <Typer message={`\u0020 remove-all-the-lexemmes-before-my-name-narengogineni[at]protonmail.com`} class='href' type={'a'} skip={curr > 10} load={curr === 10} callback={() => next()} />
      </div>
    </div>
  );
}

export default Home;
 
