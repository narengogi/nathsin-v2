import { unvaried } from './Posts/unvaried';
import { absence } from './Posts/absence';
import { futility } from './Posts/futility';
import { helloWorld } from './Posts/helloWorld';
import { information } from './Posts/information';
import { moreOnTheLoops } from './Posts/moreOnTheLoops';
import { takingABreak } from './Posts/break';

export const allPosts: any = [
  { title: 'Unvaried Iterations', date: '22nd May 2021', href: '/unvaried', content: unvaried() },
  { title: 'Quantifying Information', date: '24th March 2021', href: '/information', content: information() },
  { title: 'Dealing With Absence', date: '17th Jan 2021', href: '/absence', content: absence() },
  { title: `I'm Taking A Break`, date: '14th August 2020', href: '/break', content: takingABreak() },
  { title: 'Futility', date: '24th July 2020', href: '/futility', content: futility() },
  { title: 'More On The Loops', date: '13th July 2020', href: '/loops', content: moreOnTheLoops() },
  { title: 'Hello World', date: '07th July 2020', href: '/hello-world', content: helloWorld() },
];
