import {ModellingTheBrain} from './Posts/ModellingTheBrain';
import {DataMap} from "./Posts/DataMap";
import {Waste} from "./Posts/Waste";

export const allPosts: any = [{
    title: 'Data Map',
    date: '17th July 2022',
    href: '/datamap',
    content: DataMap()
},{
    title: `A Waste of Time`,
    date: '27th December 2020',
    href: '/waste',
    content: Waste()
}, {
    title: 'Modelling The Brain',
    date: '11th August 2020',
    href: '/brain',
    content: ModellingTheBrain()
}];
