import {ModellingTheBrain} from './Posts/ModellingTheBrain';
import {DataMap} from "./Posts/DataMap";

export const allPosts: any = [{
    title: 'Data Map',
    date: '17th July 2022',
    href: '/datamap',
    content: DataMap()
}, {
    title: 'Modelling The Brain',
    date: '11th August 2020',
    href: '/brain',
    content: ModellingTheBrain()
}];
