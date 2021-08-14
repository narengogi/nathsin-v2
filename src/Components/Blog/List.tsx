import { unvaried } from './Posts/unvaried';
import { absence } from './Posts/absence';
import { futility } from './Posts/futility';
import { helloWorld } from './Posts/helloWorld';
import { information } from './Posts/information';
import { moreOnTheLoops } from './Posts/moreOnTheLoops';
import { takingABreak } from './Posts/break';

export const allPosts: any = [
  { title: 'Unvaried Iterations', date: '22nd May 2021', href: '/unvaried', content: unvaried() },
  { title: 'Dealing With Absence', date: '22nd May 2021', href: '/absence', content: absence() },
  { title: 'Futility', date: '22nd May 2021', href: '/futility', content: futility() },
  { title: 'Hello World', date: '22nd May 2021', href: '/hello-world', content: helloWorld() },
  { title: 'Quantifying Information', date: '22nd May 2021', href: '/information', content: information() },
  { title: 'More On The Loops', date: '22nd May 2021', href: '/loops', content: moreOnTheLoops() },
  { title: `I'm Taking A Break`, date: '22nd May 2021', href: '/break', content: takingABreak() },
];
