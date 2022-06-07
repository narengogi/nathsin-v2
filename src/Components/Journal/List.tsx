import {Time} from "./Posts/Time";
import {ModellingTheBrain} from "./Posts/ModellingTheBrain";
import {Friends} from "./Posts/Friends";
import {Smoke} from "./Posts/Smoke";

export const allPosts: any = [
    { title: 'Time', date: '6th August 2019', href: '/time', content: Time() },
    { title: 'Modelling The Brain', date: '11th August 2020', href: '/brain', content: ModellingTheBrain() },
    { title: 'Friends', date: '21st September 2019', href: '/friends', content: Friends() },
    { title: 'The First Time I smoked', date: '29th September 2018', href: '/smoke', content: Smoke() },
];
