import React from 'react';
import { Router, Route, Switch } from 'react-router';
import '../Common/common.css';
import { createBrowserHistory } from 'history';
import Template from '../Blog/Template';
import { allPosts } from './List';

function listPosts() {
    console.log('test');
    return (
        <div>
            <div style={{ fontSize: '24px', color: 'var(--white)', padding: '2rem 0' }}>Unedited, Inelegant</div>
            {allPosts.map((item:any) => (
                <div style={{ padding: '1rem' }}>
                    <div>
                        <a className='href' href={`/journal${item.href}`}>
                            {item.title}
                        </a>
                    </div>
                    <div style={{ fontSize: '10px', paddingTop: '0.25rem' }}>{item.date}</div>
                </div>
            ))}
        </div>
    );
}

function Journal() {
    let history = createBrowserHistory();

    return (
        <div className='journal'>
            <Router history={history}>
                <Switch>
                    {allPosts.map((item:any) => (
                        <Route path={`/journal${item.href}`}>
                            <Template title={item.title} content={item.content} />
                        </Route>
                    ))}
                    <Route path='/journal'>
                        <div className='centeredContainer'>{listPosts()}</div>
                    </Route>
                </Switch>
            </Router>{' '}
        </div>
    );
}

export default Journal;
